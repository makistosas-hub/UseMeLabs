export function openChatlio() {
  if (typeof window === "undefined") {
    return false;
  }

  const anyWindow = window as typeof window & {
    Chatlio?: { show?: () => void };
    _chatlio?: Array<unknown>;
  };

  if (anyWindow.Chatlio?.show) {
    anyWindow.Chatlio.show();
    return true;
  }

  if (Array.isArray(anyWindow._chatlio)) {
    anyWindow._chatlio.push(["show"]);
    return true;
  }

  return false;
}

export function setChatlioMessage(message: string) {
  if (typeof window === "undefined") {
    return false;
  }

  const anyWindow = window as typeof window & {
    Chatlio?: {
      show?: () => void;
      setMessage?: (value: string) => void;
      prefill?: (value: string) => void;
      configure?: (config: { message?: string }) => void;
    };
    _chatlio?: Array<unknown>;
  };

  if (anyWindow.Chatlio?.show) {
    anyWindow.Chatlio.show();
  }

  if (anyWindow.Chatlio?.setMessage) {
    anyWindow.Chatlio.setMessage(message);
    return true;
  }

  if (anyWindow.Chatlio?.prefill) {
    anyWindow.Chatlio.prefill(message);
    return true;
  }

  if (anyWindow.Chatlio?.configure) {
    anyWindow.Chatlio.configure({ message });
    return true;
  }

  if (Array.isArray(anyWindow._chatlio)) {
    anyWindow._chatlio.push(["setMessage", message]);
    return true;
  }

  return false;
}
