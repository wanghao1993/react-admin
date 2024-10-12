import Home from "@/views/home";
import NotFound from "@/views/error/404.tsx";
import type { AppRouteRecordRaw } from "../types";
import { LayOut, NoHeaderSiderLayOut } from "@/layouts";
import Login from "@/views/login";

// 路由配置
export const homeRoute: AppRouteRecordRaw[] = [
  {
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "首页",
        },
      },
      {
        path: "*",
        element: <NotFound />,
        meta: {
          icon: "ant-design-bug-outlined ",
          title: "404",
        },
      },
    ],
  },
  {
    element: <NoHeaderSiderLayOut />,
    children: [
      {
        path: "/login",
        element: <Login />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "Login",
        },
      },
    ],
  },
];
