import { useEffect, useState } from "react";

export default function useDarkmode() {
  const [theme, setTheme] = useState(localStorage.theme);
  if (typeof window !== "undefined") {
    localStorage.setItem(theme);
  }
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

//DarkMode LightMode Reference video
// https://www.youtube.com/watch?v=2IfTD-muRF4&t=397s&ab_channel=DailyWebCoding
