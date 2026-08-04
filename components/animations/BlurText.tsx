"use client";

import { motion, Transition, Easing } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};

  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])];
  });

  return keyframes;
};

export default function BlurText({
  text = "",
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.15,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = [0.22, 1, 0.36, 1],
  onAnimationComplete,
  stepDuration = 0.7,
}: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const [inView, setInView] = useState(false);

  const elements =
    animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? {
            opacity: 0,
            y: 40,
            filter: "blur(18px)",
          }
        : {
            opacity: 0,
            y: -40,
            filter: "blur(18px)",
          },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        opacity: 0.55,
        y: direction === "top" ? 6 : -6,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
    ],
    [direction]
  );

  const fromState = animationFrom ?? defaultFrom;
  const toStates = animationTo ?? defaultTo;

  const keyframes = buildKeyframes(fromState, toStates);

  const stepCount = toStates.length + 1;

  const times = Array.from(
    { length: stepCount },
    (_, i) => i / (stepCount - 1)
  );

  const totalDuration = stepDuration * (stepCount - 1);

  return (
    <p
      ref={ref}
      className={`flex flex-wrap ${className}`}
    >
      {elements.map((segment, index) => {
        const transition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            key={index}
            initial={fromState}
            animate={inView ? keyframes : fromState}
            transition={transition}
            onAnimationComplete={
              index === elements.length - 1
                ? onAnimationComplete
                : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" &&
              index < elements.length - 1 &&
              "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
}