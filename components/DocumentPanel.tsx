
"use client"

import { useState, useRef } from "react";
import DocumentListItem from "@/components/DocumentListItem";
import { CaseDocument } from "@/types";

const initialDocuments: CaseDocument[] = [
  { id: "1", fileName: "Informe_balistica.pdf", fragmentCount: 14, isActive: true },
  { id: "2", fileName: "Cadena_custodia.docx", fragmentCount: 8 },
  { id: "3", fileName: "Reporte_ADN_lab.pdf", fragmentCount: 21 },
];

export default function DocumentPanel() {
  const[documents, setDocuments] = useState<CaseDocument[]>(initialDocuments);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if(!file) return;

    const newDoc: CaseDocument = {
      id: crypto.randomUUID(),
      fileName: file.name,
      fragmentCount: 0,
    };

    setDocuments((prev) => [...prev, newDoc]);
    e.target.value = "";
  }

  return (
    <aside className="w-[220px] border-r border-stone-800 p-3.5">
      <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wide mb-3">
        Documentos del caso
      </p>
      <div className="flex flex-col gap-1.5">
        {documents.map((doc) => (
          <DocumentListItem key={doc.id} document={doc} />
        ))}
      </div>
        <input
         ref={fileInputRef}
         type="file"
         accept=".pdf,.doc"
         onChange={handleFileSelected}
         className="hidden"
         />
        <button
         onClick={()=> fileInputRef.current?.click()}
         className="w-full mt-3.5 py-2.5 rounded-md border border-dashed border-stone-700
                    text-stone-500 text-xs flex item-center justify-center gap-1.5
                    hover:bg-white/5 transition"
        >⬆️ Agregar documento</button>
    </aside>
  );
}