
"use client"

import { useState, useRef, useEffect } from "react";
import DocumentListItem from "@/components/DocumentListItem";
import { CaseDocument } from "@/types";
import { uploadDocument, listDocuments} from "@/lib/api";

const initialDocuments: CaseDocument[] = [];

export default function DocumentPanel() {
  const[documents, setDocuments] = useState<CaseDocument[]>(initialDocuments);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
    async function fetchDocuments() {
      try {
        const docs = await listDocuments();
        const mapped: CaseDocument[] = docs.map((doc) => ({
          id: doc.id,
          fileName: doc.filename,
          fragmentCount: 0, 
        }));
        setDocuments(mapped);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al cargar documentos");
      } finally {
        setIsLoading(false);
      }
    }

    fetchDocuments();
  }, []);

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if(!file) return;

    setError(null);
    setIsUploading(true);


    try {
      const uploaded = await uploadDocument(file);

      const newDoc: CaseDocument = {
        id: uploaded.id,
        fileName: uploaded.filename,
        fragmentCount: 0, 
      };

      setDocuments((prev) => [...prev, newDoc]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir el documento");
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }

  }

  return (
    <aside className="w-[220px] border-r border-stone-800 p-3.5">
      <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wide mb-3">
        Documentos del caso
      </p>
      {isLoading ? (
        <p className="text-xs text-stone-500">Cargando documentos...</p>
      ) : (
        <div className="flex flex-col gap-1.5">
          {documents.map((doc) => (
            <DocumentListItem key={doc.id} document={doc} />
          ))}
        </div>
      )}
        <input
         ref={fileInputRef}
         type="file"
         disabled={isUploading}
         accept=".pdf"
         onChange={handleFileSelected}
         className="hidden"
         />
        <button
         onClick={()=> fileInputRef.current?.click()}
         className="w-full mt-3.5 py-2.5 rounded-md border border-dashed border-stone-700
                    text-stone-500 text-xs flex item-center justify-center gap-1.5
                    hover:bg-white/5 transition"
        >{isUploading ? "Subiendo..." : "⬆️ Agregar documento"}</button>
              {error && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}
    </aside>
  );
}