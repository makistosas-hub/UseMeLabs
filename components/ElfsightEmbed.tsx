"use client";

import { useEffect } from "react";

const scriptSrc = "https://elfsightcdn.com/platform.js";
const scriptId = "elfsight-platform";

export default function ElfsightEmbed() {
  useEffect(() => {
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-86283f0d-1a93-4c49-9651-c933fc5a17e5"
      data-elfsight-app-lazy
    />
  );
}