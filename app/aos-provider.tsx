"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Force light theme globally and clear any previous preference
    document.documentElement.classList.remove("dark");
    try { localStorage.setItem("theme", "light"); } catch {}
    setMounted(true);

    // Initialize AOS
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      {children}
      {/* Dark mode permanently disabled as requested */}
    </>
  );
}


