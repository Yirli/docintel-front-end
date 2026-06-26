"use client";

import { useState } from "react";

type ChatInputProps = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    const trimmed = value.trim();
    if (trimmed === "") return; 

    onSend(trimmed);
    setValue(""); 
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="flex items-center gap-2 border-t border-stone-800 pt-3.5 mt-auto">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pregunta algo sobre los documentos del caso..."
        className="flex-1 bg-[#1B232C] border border-stone-800 rounded-lg px-3 py-2.5
                   text-[13px] text-stone-100 placeholder:text-stone-500
                   focus:outline-none focus:border-amber-500/50"
      />
      <button
        onClick={handleSubmit}
        className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center
                   hover:bg-amber-400 transition"
      >
        ↑
      </button>
    </div>
  );
}