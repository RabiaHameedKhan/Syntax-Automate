"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { useEffect, useState } from "react";

const conversation = [
  {
    sender: "user",
    text: "Summarize today's sales report",
  },
  {
    sender: "bot",
    text: "Revenue increased 18% compared to yesterday.",
  },
  {
    sender: "bot",
    text: "Top product: AI Dashboard Pro",
  },
  {
    sender: "bot",
    text: "Recommended action: Increase ad budget by 12%",
  },
];

export default function AIAgentCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => {
        if (v >= conversation.length) return 0;
        return v + 1;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0E1821]/80 p-8 backdrop-blur-xl">

      {/* Browser Header */}

      <div className="mb-7 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="space-y-4 min-h-[260px]">

        {conversation.slice(0, visible).map((msg, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .45,
            }}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-7 ${
                msg.sender === "user"
                  ? "bg-[#1E566C] text-white"
                  : "bg-white/6 text-gray-200"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[.15em]">

                {msg.sender === "user" ? (
                  <User size={14} />
                ) : (
                  <Bot size={14} />
                )}

                {msg.sender}

              </div>

              {msg.text}

            </div>
          </motion.div>
        ))}

      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

        <span className="text-xs uppercase tracking-[.25em] text-[#58B8D4]">
          AI Agent
        </span>

        <motion.div
          animate={{
            opacity: [1, .2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="text-xs text-gray-400"
        >
          Thinking...
        </motion.div>

      </div>

    </div>
  );
}