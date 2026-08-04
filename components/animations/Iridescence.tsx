"use client";

// import "./Iridescence.css";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

type IridescenceProps = {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  className?: string;
};

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position,0.0,1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main(){

    float mr=min(uResolution.x,uResolution.y);

    vec2 uv=(vUv.xy*2.0-1.0)*uResolution.xy/mr;

    uv+=(uMouse-vec2(.5))*uAmplitude;

    float d=-uTime*.5*uSpeed;

    float a=0.0;

    for(float i=0.0;i<8.0;++i){
        a+=cos(i-d-a*uv.x);
        d+=sin(uv.y*i+a);
    }

    d += uTime * 0.5 * uSpeed;

    float grey = clamp(0.85 + 0.08 * cos(uv.x * 3.0 + d) + 0.08 * sin(uv.y * 4.0 + a), 0.0, 1.0);
    vec3 col = vec3(grey);

    gl_FragColor = vec4(col, 0.55);

}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 0.42,
  amplitude = 0.04,
  mouseReact = true,
  className = "",
}: IridescenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
    });

    const gl = renderer.gl;

    gl.clearColor(0.9686, 0.9765, 0.9804, 0);

    let program: Program;

    function resize() {
      renderer.setSize(
        container.offsetWidth,
        container.offsetHeight
      );

      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }

    window.addEventListener("resize", resize);

    resize();

    const geometry = new Triangle(gl);

    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,

      uniforms: {
        uTime: {
          value: 0,
        },

        uColor: {
          value: new Color(...color),
        },

        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },

        uMouse: {
          value: new Float32Array([
            mouse.current.x,
            mouse.current.y,
          ]),
        },

        uAmplitude: {
          value: amplitude,
        },

        uSpeed: {
          value: speed,
        },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    let animationFrame = 0;

    function update(time: number) {
      animationFrame = requestAnimationFrame(update);

      program.uniforms.uTime.value = time * 0.001;

      renderer.render({
        scene: mesh,
      });
    }

    animationFrame = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    function handleMouse(e: MouseEvent) {
      const rect = container.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width;

      const y =
        1 -
        (e.clientY - rect.top) /
          rect.height;

      mouse.current = { x, y };

      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }

    if (mouseReact) {
      container.addEventListener(
        "mousemove",
        handleMouse
      );
    }

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      if (mouseReact) {
        container.removeEventListener(
          "mousemove",
          handleMouse
        );
      }

      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }

      gl.getExtension(
        "WEBGL_lose_context"
      )?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

 return (
  <div
    ref={containerRef}
    className={`absolute inset-0 h-full w-full overflow-hidden pointer-events-none ${className}`}
  />
);
}