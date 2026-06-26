
import DocumentListItem from "@/components/DocumentListItem";
import { CaseDocument } from "@/types";

const mockDocuments: CaseDocument[] = [
  { id: "1", fileName: "Informe_balistica.pdf", fragmentCount: 14, isActive: true },
  { id: "2", fileName: "Cadena_custodia.docx", fragmentCount: 8 },
  { id: "3", fileName: "Reporte_ADN_lab.pdf", fragmentCount: 21 },
];

export default function DocumentPanel() {
  return (
    <aside className="w-[220px] border-r border-stone-800 p-3.5">
      <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wide mb-3">
        Documentos del caso
      </p>
      <div className="flex flex-col gap-1.5">
        {mockDocuments.map((doc) => (
          <DocumentListItem key={doc.id} document={doc} />
        ))}
      </div>
    </aside>
  );
}