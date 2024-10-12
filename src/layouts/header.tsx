import Breadcrumb from "@/components/BreadCrumb";
import Profile from "./profile";
import ThemeToggle from "@/components/Theme/theme";
import { useContext } from "react";
import { ThemeContext } from "@/provider/themeprovider";
import { useAppStore } from "@/store/app";

export function Header() {
  const value = useContext(ThemeContext);

  return (
    <>
      <header className="px-4 flex-between">
        <Breadcrumb></Breadcrumb>
        <div className="flex-center gap-2">
          <ThemeToggle />
          <Profile />
        </div>
      </header>
    </>
  );
}
