import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chatlio-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        widgetid?: string;
      };
    }
  }
}

export {};