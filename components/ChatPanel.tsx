"use client";

import IntakeChips from "@/components/IntakeChips";
import { openLandbot } from "@/lib/landbot";

export default function ChatPanel() {
  return (
    <div
      id="chat-panel"
      className="rounded-3xl border border-white/10 bg-panel-glass p-6 shadow-soft backdrop-blur"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200/80">
            AI pokalbis
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Pradėk pokalbį dabar</h3>
        </div>
        <button
          onClick={() => openLandbot()}
          className="rounded-full bg-teal-300/90 px-5 py-2 text-xs font-semibold text-slate-900 shadow-glow transition hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/80"
        >
          Atidaryti pokalbį
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
        <IntakeChips />
      </div>
    </div>
  );
}