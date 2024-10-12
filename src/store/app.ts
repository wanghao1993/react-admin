import { create } from "zustand";

type State = {
  theme: "dark" | "light";
};

type Action = {
  setTheme: () => void;
};
export const useAppStore = create<State & Action>((set) => {
  return {
    theme: "light",
    isLoading: false,
    setTheme: () =>
      set((state: { theme: "light" | "dark" }) => ({
        theme: state.theme === "light" ? "dark" : "light",
      })),
  };
});
