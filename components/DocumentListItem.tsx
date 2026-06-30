import { CaseDocument } from "@/types";

interface DocumentListItemProps {
  document: CaseDocument;
  isActive?: boolean;   
  onClick?: () => void; 
}

export default function DocumentListItem({ document, isActive, onClick }: DocumentListItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-2 px-2.5 py-2 rounded-md text-left transition
        ${isActive
          ? "bg-amber-500/10 border border-amber-500/35"
          : "border border-transparent hover:bg-white/5"}`}
    >
      <span className="text-sm mt-0.5">📄</span>
      <span>
        <span className={`block text-[13px] ${isActive ? "text-stone-100" : "text-stone-300"}`}>
          {document.fileName}
        </span>
        <span className="block font-mono text-[10.5px] text-stone-500 mt-0.5">
          {document.fragmentCount} fragmentos indexados
        </span>
      </span>
    </button>
  );
}