"use client";

import { useState, useEffect, useRef } from "react";
import LanguageContent from "./LanguageContent";
import CurrencyContent from "./CurrencyContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};


export default function Tab({ isOpen, onClose }: Props) {
  const [tab, setTab] = useState<"language" | "currency">("language");
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!isOpen) return;

  const handleClickOut = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOut);

  return () => {
    document.removeEventListener("mousedown", handleClickOut);
  };
}, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal */}
      <div ref={modalRef} className="bg-white w-[900px] max-w-[95%] h-[80vh] rounded-2xl p-6 relative flex flex-col">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 left-4 text-xl">
          ✕
        </button>

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-3 mt-6">
          <button
            onClick={() => setTab("language")}
            className={`cursor-pointer pb-2 ${
              tab === "language"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }` }
          >
            Language and region
          </button>

          <button
            onClick={() => setTab("currency")}
            className={`pb-2 cursor-pointer ${
              tab === "currency"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Currency
          </button>
        </div>

        {/* CONTENT (scrollable) */}
        <div className="overflow-y-auto mt-6 pr-2">
          {tab === "language" ? <LanguageContent /> : <CurrencyContent />}
        </div>
      </div>
    </div>
  );
}
