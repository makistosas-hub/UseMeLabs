"use client";

import { useState } from "react";
import { logEvent } from "@/lib/analytics";
import { buildTemplate, TemplateKey, templateLabels } from "@/lib/templates";

const chipOrder: TemplateKey[] = ["pretenzija", "sutartis", "ivertinimas", "skola"];

export default function IntakeChips() {
  const [toast, setToast] = useState<string | null>(null);

  const handleClick = async (key: TemplateKey) => {
    logEvent("intake_chip_clicked", { key });

    const template = buildTemplate(key, window.location.pathname);
    const copied = await copyToClipboard(template);

    if (copied) {
      logEvent("template_copied", { key });
      showToast("Šablonas nukopijuotas – įklijuok į pokalbį.");
      return;
    }

    showToast("Nepavyko nukopijuoti. Pažymėk tekstą rankiniu būdu.");
  };

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2">
        {chipOrder.map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-teal-300/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/80"
            aria-label={`Greitas šablonas: ${templateLabels[key]}`}
          >
            {templateLabels[key]}
          </button>
        ))}
      </div>
      {toast ? (
        <div
          className="pointer-events-none absolute left-0 top-full mt-3 w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 shadow-soft"
          role="status"
          aria-live="polite"
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}

async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return fallbackCopy(value);
  }
}

function fallbackCopy(value: string) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}