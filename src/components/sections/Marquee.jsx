"use client";

import { Sparkle } from "@/components/ui/Icons";

const items = [
  { kind: "n7" },
  { kind: "say" },
  { kind: "wave" },
  { kind: "text", text: "to the new way of banking" },
  { kind: "cb7" },
  { kind: "say" },
];

function Item({ item }) {
  switch (item.kind) {
    case "n7":
      return <span className="text-[#5BB4FF] font-semibold">N7</span>;
    case "cb7":
      return <span className="text-[#2D7FF9] font-semibold">CB7</span>;
    case "say":
      return <span className="text-ink-900 font-medium">Say</span>;
    case "wave":
      return <span className="text-2xl md:text-3xl">👋</span>;
    case "text":
      return <span className="text-ink-900 font-medium">{item.text}</span>;
    default:
      return null;
  }
}

export default function Marquee() {
  // Duplicate for seamless loop
  const loop = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-white text-ink-900 py-8 md:py-10 overflow-hidden border-y border-slate-100">
      <div className="flex marquee-track animate-marquee whitespace-nowrap">
        {loop.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 md:gap-12 px-6 md:px-8 text-xl md:text-3xl">
            <Sparkle className="w-5 h-5 md:w-6 md:h-6 text-slate-400 shrink-0" />
            <Item item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
