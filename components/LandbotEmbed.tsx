"use client";

import { useEffect } from "react";

const scriptSrc = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
const configUrl =
  "https://storage.googleapis.com/landbot.online/v3/H-3308356-PJ1JFVQROP9HO902/index.json";

export default function LandbotEmbed() {
  useEffect(() => {
    let landbotInitialized = false;
    let landbotInstance: unknown;

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

        landbotInstance = new (window as typeof window & {
          Landbot?: {
            Livechat: new (config: { configUrl: string }) => unknown;
          };
        }).Landbot?.Livechat({
          configUrl
        });
      });
      script.src = scriptSrc;

      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
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