import { APP_TAG } from "@/constants/config.ts";

export type SupportedLanguage = "en" | "de";

function ensureSupportedLanguage(input: unknown): SupportedLanguage | null {
  switch (input) {
    case "en":
    case "de": {
      return input;
    }
  }

  return null;
}

/**
 * Get the browser's language setting.
 * @returns The supported language or null if not supported.
 */
function getBrowserLanguage(): SupportedLanguage | null {
  if (typeof navigator === "undefined") {
    return null;
  }

  const value = navigator?.language?.toLowerCase().split("-")[0];
  return ensureSupportedLanguage(value);
}

/**
 * Get the local storage language setting.
 * @returns The supported language or null if not supported.
 */
function getLocalStorageLanguage(): SupportedLanguage | null {
  if (typeof localStorage === "undefined") {
    return null;
  }

  const value = localStorage.getItem(`${APP_TAG}_lang`);
  return ensureSupportedLanguage(value);
}

/**
 * Get the client language, prioritizing local storage, then browser settings.
 * @returns The supported language or 'en' if not supported.
 */
function getClientLanguage(): SupportedLanguage {
  return getLocalStorageLanguage() ?? getBrowserLanguage() ?? "en";
}

export const BROWSER_LANGUAGE = getClientLanguage();
