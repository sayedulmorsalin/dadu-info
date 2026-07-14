"use client";

import { useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu";
const ANDROID_PACKAGE_NAME = "com.sayedulmarsalin.dadu";

export default function ProductStoreRedirect() {
  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (!isAndroid) {
      return;
    }

    const currentPath = `${window.location.host}${window.location.pathname}${window.location.search}`;
    const intentUrl =
      `intent://${currentPath}#Intent;scheme=https;package=${ANDROID_PACKAGE_NAME};` +
      `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;

    const openAppTimer = window.setTimeout(() => {
      window.location.href = intentUrl;
    }, 300);

    const playStoreTimer = window.setTimeout(() => {
      window.location.href = PLAY_STORE_URL;
    }, 2500);

    const clearRedirects = () => {
      window.clearTimeout(openAppTimer);
      window.clearTimeout(playStoreTimer);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearRedirects();
      }
    };

    window.addEventListener("pagehide", clearRedirects);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearRedirects();
      window.removeEventListener("pagehide", clearRedirects);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
