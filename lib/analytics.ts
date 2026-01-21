export type AnalyticsEvent =
  | "chat_loaded"
  | "chat_opened"
  | "intake_chip_clicked"
  | "template_copied";

const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

export async function logEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info(`[td] ${event}`, payload);
  }

  if (!endpoint) {
    return;
  }

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, payload, ts: new Date().toISOString() })
    });
  } catch {
    // Ignore network errors for optional analytics.
  }
}
