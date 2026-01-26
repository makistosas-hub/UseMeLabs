export function openLandbot(message?: string) {
  if (typeof window === "undefined") {
    return false;
  }

  const anyWindow = window as typeof window & {
    __td_landbot?: {
      open: (message?: string) => boolean;
    };
  };

  return anyWindow.__td_landbot?.open(message) ?? false;
}

export function sendLandbotMessage(message: string) {
  if (typeof window === "undefined") {
    return false;
  }

  const anyWindow = window as typeof window & {
    __td_landbot?: {
      sendMessage: (message: string) => boolean;
    };
  };

  return anyWindow.__td_landbot?.sendMessage(message) ?? false;
}