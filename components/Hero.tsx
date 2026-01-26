"use client";

import ChatPanel from "@/components/ChatPanel";
import Link from "next/link";
import { openLandbot } from "@/lib/landbot";

const badges = [
  "Be teismo",
  "Konfidencialu",
  "Pagal LR civilinį kodeksą",
  "Iki ~5000€"
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200/80">AI legal-tech</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Teisės draugas – kai teisininkas per brangus, o tylėti per skaudu.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
            Per kelias minutes paruošk pretenziją, sutartį ar aiškų laišką. Parašyk situaciją ir
            gauk aiškų, praktišką tekstą.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => {
                openLandbot();
                document.getElementById("chat-panel")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/80"
            >
              Pradėti pokalbį
            </button>
            <Link
              href="#kaip-veikia"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/80"
            >
              Kaip tai veikia
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <ChatPanel />
        </div>
      </div>
    </section>
  );
}