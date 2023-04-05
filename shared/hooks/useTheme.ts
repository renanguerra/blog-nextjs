"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [themeColor, setThemeColor] = useState(() => {
    const localTheme = window.localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });

  useEffect(() => {
    if (themeColor === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
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
