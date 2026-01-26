"use client";

import { useEffect } from "react";

const scriptSrc = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
const configUrl =
  "https://storage.googleapis.com/landbot.online/v3/H-3308356-PJ1JFVQROP9HO902/index.json";

type LandbotWindow = typeof window & {
  Landbot?: {
    Livechat: new (config: { configUrl: string }) => unknown;
  };
  __td_landbot?: {
    init: () => void;
    open: (message?: string) => boolean;
    sendMessage: (message: string) => boolean;
  };
};

export default function LandbotEmbed() {
  useEffect(() => {
    let landbotInitialized = false;
    let landbotInstance: unknown;
    let pendingMessage: string | null = null;

    const sendIfPossible = (message: string) => {
      const instanceAny = landbotInstance as {
        sendMessage?: (value: string) => void;
        send?: (value: string) => void;
        sendText?: (value: string) => void;
        pushMessage?: (value: string) => void;
        open?: () => void;
      };

      if (!instanceAny) {
        return false;
      }

      if (typeof instanceAny.open === "function") {
        instanceAny.open();
      }

      if (typeof instanceAny.sendMessage === "function") {
        instanceAny.sendMessage(message);
        return true;
      }

      if (typeof instanceAny.send === "function") {
        instanceAny.send(message);
        return true;
      }

      if (typeof instanceAny.sendText === "function") {
        instanceAny.sendText(message);
        return true;
      }

      if (typeof instanceAny.pushMessage === "function") {
        instanceAny.pushMessage(message);
        return true;
      }

      return false;
    };

    const initLandbot = () => {
      if (landbotInitialized) {
        return;
      }
      landbotInitialized = true;

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${scriptSrc}"]`
      );

      if (existing) {
        return;
      }

      const script = document.createElement("script");
      script.type = "module";
      script.async = true;
      script.addEventListener("load", () => {
        if (landbotInstance) {
          return;
        }

        const LandbotCtor = (window as LandbotWindow).Landbot?.Livechat;
        if (!LandbotCtor) {
          return;
        }

        landbotInstance = new LandbotCtor({
          configUrl
        });

        if (pendingMessage) {
          const message = pendingMessage;
          pendingMessage = null;
          window.setTimeout(() => {
            sendIfPossible(message);
          }, 600);
        }
      });
      script.src = scriptSrc;

      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }
    };

    const openLandbot = (message?: string) => {
      initLandbot();

      if (message) {
        if (!landbotInstance) {
          pendingMessage = message;
        } else {
          window.setTimeout(() => {
            sendIfPossible(message);
          }, 500);
        }
      }

      const instanceAny = landbotInstance as { open?: () => void } | undefined;
      if (instanceAny?.open) {
        instanceAny.open();
      }

      return true;
    };

    (window as LandbotWindow).__td_landbot = {
      init: initLandbot,
      open: openLandbot,
      sendMessage: (message: string) => {
        if (!landbotInstance) {
          pendingMessage = message;
          initLandbot();
          return false;
        }

        return sendIfPossible(message);
      }
    };

    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return null;
}