"use client";

import { useEffect } from "react";
import { logEvent } from "@/lib/analytics";

const widgetScriptSrc = "https://js.chatlio.com/widget.js";

export default function ChatlioEmbed() {
  const embedCode = process.env.NEXT_PUBLIC_CHATLIO_EMBED_CODE;
  const widgetId = process.env.NEXT_PUBLIC_CHATLIO_WIDGET_ID;

  useEffect(() => {
    if (!widgetId || embedCode) {
      return;
    }

    if (document.getElementById("chatlio-widget")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "chatlio-widget";
    script.async = true;
    script.src = widgetScriptSrc;
    script.setAttribute("data-widget-id", widgetId);
    script.onload = () => logEvent("chat_loaded", { mode: "widget_id" });
    document.head.appendChild(script);
  }, [embedCode, widgetId]);

  useEffect(() => {
    if (embedCode) {
      logEvent("chat_loaded", { mode: "embed_code" });
    }
  }, [embedCode]);

  if (!embedCode && !widgetId) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-6 text-sm text-slate-200">
        <p className="font-semibold text-slate-100">Chatlio neįjungtas.</p>
        <p className="mt-2 text-slate-300">
          Įklijuok Chatlio embed kodą į <code className="text-slate-100">.env.local</code>:
        </p>
        <div className="mt-3 rounded-xl bg-slate-950/70 px-4 py-3 text-xs text-slate-200">
          NEXT_PUBLIC_CHATLIO_EMBED_CODE=&quot;&lt;!-- paste Chatlio script here --&gt;&quot;
        </div>
        <p className="mt-3 text-slate-300">
          Arba naudok widget ID: <code className="text-slate-100">NEXT_PUBLIC_CHATLIO_WIDGET_ID</code>.
        </p>
      </div>
    );
  }

  if (embedCode) {
    return (
      <div
        className="min-h-[420px] rounded-2xl border border-white/10 bg-slate-950/70"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: embedCode }}
      />
    );
  }

  return (
    <div className="min-h-[420px] rounded-2xl border border-white/10 bg-slate-950/70">
      {widgetId ? (
        <div className="h-full w-full">
          <chatlio-widget widgetid={widgetId} className="block h-[420px] w-full" />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-slate-400">
          Chatlio įkraunamas...
        </div>
      )}
    </div>
  );
}