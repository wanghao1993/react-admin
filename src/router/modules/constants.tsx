import Home from "@/views/home";
import NotFound from "@/views/error/404.tsx";
import { AppRouteRecordRaw } from "../types";
import { LayOut } from "@/layouts";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    meta: {
      icon: "ant-design-bug-outlined ",
      title: "404",
    },
  },
];
