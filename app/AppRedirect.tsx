"use client";

import { useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu";
const ANDROID_PACKAGE_NAME = "com.sayedulmarsalin.dadu";

export default function AppRedirect() {
  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (!isAndroid) {
      return;
    }

    // Capture the current URL details to pass into the intent
    // This allows intent://dadubd.com/cart#Intent... to work for any path
    const host = window.location.host;
    const path = window.location.pathname;
    const search = window.location.search;

    const currentPath = `${host}${path}${search}`;

    // Construct the Android Intent URL
    // This will try to open the app. If not installed, it falls back to Play Store.
    const intentUrl =
      `intent://${currentPath}#Intent;scheme=https;package=${ANDROID_PACKAGE_NAME};` +
      `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;

    // Try to open the app immediately
    const openAppTimer = window.setTimeout(() => {
      window.location.href = intentUrl;
    }, 300);

    // Fallback to Play Store if the app doesn't open within 2.5 seconds
    const playStoreTimer = window.setTimeout(() => {
      // Only redirect to Play Store if we are still on the page (app didn't open)
      if (!document.hidden) {
        window.location.href = PLAY_STORE_URL;
      }
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
