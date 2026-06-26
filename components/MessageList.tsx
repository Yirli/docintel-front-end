// MessageList.tsx (ejemplo con datos de prueba)
import UserMessage from "@/components/UserMessage";
import AssistantMessage from "@/components/AssistantMessage";
import { ChatMessage } from "@/types";

type MessageListProps = {
  messages: ChatMessage[];
};

export default function MessageList({messages} : MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-1">
      {messages.map((msg) =>
        msg.role === "user" ? (
          <UserMessage key={msg.id} text={msg.text} />
        ) : (
          <AssistantMessage
            key={msg.id}
            text={msg.text}
            citations={msg.citations}
            sources={msg.sources}
          />
        )
      )}
    </div>
  );
}