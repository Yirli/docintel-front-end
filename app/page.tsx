import DocumentPanel from "@/components/DocumentPanel";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <main className="flex h-screen bg-[#0F1419]">
      <DocumentPanel />
      <ChatWindow />
    </main>
  );
}