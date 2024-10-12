import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useAppStore } from "@/store/app";
import { useEffect } from "react";
import ThemeStyle from "./theme.module.css";

export default function ThemeToggle() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((action) => action.setTheme);

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="flex-center  cursor-pointer ">
      <div
        className="flex-center p-1 border flex gap-2 rounded hover:shadow-blueGray"
        onClick={() => setTheme()}
      >
        <SunOutlined
          className={`${ThemeStyle.icon} ${theme === "light" && ThemeStyle.iconActive}`}
        />
        <MoonOutlined
          className={`${ThemeStyle.icon} ${theme === "dark" && ThemeStyle.iconActive}`}
        />
      </div>
    </div>
  );
}
