"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [themeColor, setThemeColor] = useState("dark");

  useEffect(() => {
    if (
      themeColor === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [themeColor]);

  const handleTheme = () => {
    if (themeColor === "light") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  };

  return {
    themeColor,
    handleTheme,
  };
};
