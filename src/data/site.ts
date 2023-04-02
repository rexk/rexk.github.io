import { Site as EnSite } from "./en";
import { Site as KrSite } from "./ko";

interface Site {
  title: string;
  description: string;
}

export function getLocalizedSite(lang: string | undefined): Site {
  if (!lang) {
    return EnSite;
  }

  switch (lang) {
    case "en":
      return EnSite;
    case "ko":
      return KrSite;
    default:
      return EnSite;
  }
}
