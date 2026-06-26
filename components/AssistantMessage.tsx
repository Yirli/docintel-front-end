import CitationTag from "@/components/CitationTag";
import SourceChip from "@/components/SourceChip";
import { Citation, Source } from "@/types";

type AssistantMessageProps = {
  text: string;
  citations?: Citation[];
  sources?: Source[];
};

export default function AssistantMessage({ text, citations, sources }: AssistantMessageProps) {
  return (
    <div className="max-w-[88%] mb-4.5">
      <p className="text-[13.5px] leading-relaxed text-stone-300 m-0 mb-2.5">
        {text}
        {citations?.map((citation) => (
          <CitationTag key={citation.id} label={citation.id} />
        ))}
      </p>
      {sources && sources.length > 0 && (
        <div className="flex gap-1.5">
          {sources.map((source, i) => (
            <SourceChip key={i} source={source} />
          ))}
        </div>
      )}
    </div>
  );
}