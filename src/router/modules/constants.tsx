import { RouteObject } from "react-router-dom";
import Home from "@/views/home";
import NotFound from "@/views/error/404.tsx";

// 路由配置
export const homeRoute: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
