type ChatHeaderProps = {
  caseId: string;
};

export default function ChatHeader({ caseId }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-2.5 px-1 py-3.5 border-b border-stone-800">
      <div className="w-[26px] h-[26px] rounded bg-amber-500 flex items-center justify-center">
        <span className="text-xs">🔍</span>
      </div>
      <span className="font-serif text-[17px] tracking-wide text-stone-100">
        DocIntel
      </span>
      <span className="font-mono text-[11px] text-stone-500 ml-1 px-1.5 py-0.5 border border-stone-800 rounded">
        {caseId}
      </span>
      <button className="ml-auto w-7 h-7 flex items-center justify-center rounded hover:bg-white/5 transition">
        <span className="text-stone-500">...</span>
      </button>
    </div>
  );
}