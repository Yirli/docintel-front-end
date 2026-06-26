type UserMessageProps = {
  text: string;
};

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end mb-3.5">
      <div className="max-w-[75%] bg-[#1B232C] rounded-xl rounded-br-sm px-3.5 py-2.5">
        <p className="text-[13.5px] leading-relaxed text-stone-100 m-0">
          {text}
        </p>
      </div>
    </div>
  );
}