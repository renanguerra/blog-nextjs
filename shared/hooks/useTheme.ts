"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
  useEffect(() => {
    const initialValidationCondition =
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (localStorage.theme === "dark" || initialValidationCondition) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";

      document.documentElement.classList.remove("dark");
    }
  };

  return {
    handleTheme,
  };
};
