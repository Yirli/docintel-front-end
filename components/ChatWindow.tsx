
"use client";

import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import { ChatMessage, CaseDocument } from "@/types";


interface ChatWindowProps {
  activeDocument: CaseDocument | null;
}

export default function ChatWindow({ activeDocument }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  function handleSend(text: string) {
    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, newMessage]);

  }

return (
    <div className="flex flex-col flex-1 h-full px-5">
      <ChatHeader caseId={"1401"} />

      {!activeDocument ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-stone-500">
          <span className="text-4xl">📄</span>
          <p className="text-sm">Seleccioná un documento para comenzar</p>
        </div>
      ) : (
        <MessageList messages={messages} />
      )}

      <ChatInput
        onSend={handleSend}
        disabled={!activeDocument}  // ← nuevo
      />
    </div>
  );
}