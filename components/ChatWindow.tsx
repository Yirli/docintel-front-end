
"use client";

import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import { ChatMessage } from "@/types";

export default function ChatWindow() {
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
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}