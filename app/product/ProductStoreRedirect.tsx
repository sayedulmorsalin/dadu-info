"use client";

import { useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu";

export default function ProductStoreRedirect() {
  useEffect(() => {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    if (!isMobile) {
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.href = PLAY_STORE_URL;
    }, 2500);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return null;
}

