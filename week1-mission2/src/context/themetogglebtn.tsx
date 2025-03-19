import { THEME, useTheme } from "./themeprovider";
import clsx from "clsx";

export default function ThemeToggleBtn() {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === THEME.LIGHT;

  return (
    <button
      className={clsx("px-4 py-2 mt-4 rounded-md transition-all", {
        "bg-black text-white": !isLight,
        "bg-white text-black": isLight,
      })}
      onClick={toggleTheme}
    >
      {isLight ? "🌙" : "🌞"}
    </button>
  );
}
