type CitationTagProps = {
  label: string;       
  onClick?: () => void; 
};

export default function CitationTag({ label, onClick }: CitationTagProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 mx-0.5
                 bg-amber-500/15 border border-amber-500/50
                 text-amber-400 text-xs font-mono hover:bg-amber-500/25 transition"
    >
      {label}
    </button>
  );
}