"use client";

import { useCallback, useEffect } from "react";
import ChatlioEmbed from "@/components/ChatlioEmbed";
import IntakeChips from "@/components/IntakeChips";
import { logEvent } from "@/lib/analytics";
import { openChatlio } from "@/lib/chatlio";

export default function ChatPanel() {
  const handleOpenChat = useCallback((source: string) => {
    const opened = openChatlio();
    logEvent("chat_opened", { source, opened });
    return opened;
  }, []);

  useEffect(() => {
    let interacted = false;
    const markInteracted = () => {
      interacted = true;
    };

    window.addEventListener("pointerdown", markInteracted, { passive: true });
    window.addEventListener("keydown", markInteracted);
    window.addEventListener("scroll", markInteracted, { passive: true });

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      const timer = window.setTimeout(() => {
        if (!interacted) {
          handleOpenChat("auto");
        }
      }, 1200);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("pointerdown", markInteracted);
        window.removeEventListener("keydown", markInteracted);
        window.removeEventListener("scroll", markInteracted);
      };
    }

    return () => {
      window.removeEventListener("pointerdown", markInteracted);
      window.removeEventListener("keydown", markInteracted);
      window.removeEventListener("scroll", markInteracted);
    };
  }, [handleOpenChat]);

  return (
    <div
      id="chat-panel"
      className="rounded-3xl border border-white/10 bg-panel-glass p-6 shadow-soft backdrop-blur"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200/80">
            Chatlio – tiesiai į Slack
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Pradėk pokalbį dabar</h3>
        </div>
        <button
          onClick={() => handleOpenChat("manual")}
          className="hidden rounded-full bg-teal-300/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/80 lg:inline-flex"
        >
          Pradėti pokalbį
        </button>
      </div>

      <div className="mt-6">
        <ChatlioEmbed />
      </div>

      <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
        <p>
          Greitam startui pasirink šabloną – jei Chatlio nepalaiko iš anksto įkeltos žinutės,
          tekstas bus nukopijuotas į iškarpinę.
        </p>
        <IntakeChips />
      </div>

      <button
        onClick={() => handleOpenChat("mobile")}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/70 lg:hidden"
      >
        Pradėti pokalbį
      </button>
    </div>
  );
}