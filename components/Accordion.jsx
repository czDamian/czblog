"use client";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [accOpen, setAccOpen] = useState(false);

  return (
    <div className="py-2 border bg-yellow-800">
      <button
        onClick={() => setAccOpen((a) => !a)}
        className="flex w-full px-4 rounded justify-between items-center py-1">
        <span>{title}</span>
        {accOpen ? <span>+</span> : <span>-</span>}
      </button>
      <div
        className={`grid overflow-hidden text-[12px] opacity-70 transition-all duration-300 ease-in-out text-slate-100 ${
          accOpen ? "grid-rows-[1fr] " : "grid-rows[1fr] hidden"
        }`}>
        <div className="px-4 overflow-hidden">{content}</div>
      </div>
    </div>
  );
};
export default Accordion;
