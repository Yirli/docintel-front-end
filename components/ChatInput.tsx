"use client";

import { useState } from "react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;  // ← nuevo
}
export default function ChatInput({ onSend, disabled }: ChatInputProps) {
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
    <div className="py-4">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={disabled}
          placeholder={
            disabled
              ? "Seleccioná un documento para comenzar"
              : "Pregunta algo sobre los documentos del caso..."
          }
          className={`flex-1 bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5
                      text-sm text-stone-200 placeholder-stone-500 outline-none transition
                      ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="bg-amber-500 text-black rounded-lg px-3 py-2.5
                     disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ↑
        </button>
      </div>
    </div>
  );
}