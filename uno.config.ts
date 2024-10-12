// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { IconsSet } from "./src/components/Icon/icon";
export default defineConfig({
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["flex-center", "flex justify-center items-center"],
    ["flex-between", "flex justify-between items-center"],
    ["flex-col", "flex flex-col"],
    ["text-ellipsis", "truncate"],
    [
      "icon-btn",
      "text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none",
    ],
  ],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      dark_bg: "var(--dark-bg)",
    },
  },
  safelist: [...IconsSet],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      collections: {
        "ant-design": () =>
          import("@iconify-json/ant-design").then((res) => res.icons),
      },
    }),
  ],
});
