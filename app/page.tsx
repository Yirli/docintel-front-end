"use client" 

import { useState } from "react";
import DocumentPanel from "@/components/DocumentPanel";
import ChatWindow from "@/components/ChatWindow";
import { CaseDocument } from "@/types";

export default function Home() {
  const [activeDocument, setActiveDocument] = useState<CaseDocument | null>(null);

  return (
    <main className="flex h-screen bg-[#0F1419]">
      <DocumentPanel
        activeDocument={activeDocument}
        onDocumentSelect={setActiveDocument}
      />
      <ChatWindow activeDocument={activeDocument} />
    </main>
  );
}