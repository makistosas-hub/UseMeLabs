"use client";

import IntakeChips from "@/components/IntakeChips";

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
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          Pokalbio langas – apačioje dešinėje
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-300">
        Atidaryk AI pokalbį ekrano apačioje dešinėje ir parašyk situaciją.
        <span className="mt-2 block text-xs text-slate-400">
          Šablonai žemiau nukopijuoja struktūrą į iškarpinę – įklijuok į pokalbį.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
        <IntakeChips />
      </div>
    </div>
  );
}