'use client'

import { useState, useEffect } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 rounded border rounded px-3 py-2 dark: border rounded px-3 py-2 text-sm transition"
    >
      {dark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
