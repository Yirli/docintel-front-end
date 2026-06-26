import { Source } from "@/types";

type SourceChipProps = {
  source: Source;
};

export default function SourceChip({ source }: SourceChipProps) {
  return (
    <span className="font-mono text-[10.5px] text-stone-500 px-2 py-0.5 rounded-full border border-stone-700">
      {source.fileName} · pág. {source.page}
    </span>
  );
}