import Home from "@/views/home";
import { AppRouteRecordRaw } from "../types";

// 路由配置
export const dashbordRoute: AppRouteRecordRaw[] = [
  {
    path: "/dashboard",
    element: <Home />,
    meta: {
      icon: "ant-design-home-outlined",
      title: "首页",
    },
    children: [
      {
        path: "a",
        element: <Home />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "首页",
          hideMenu: true,
        },
        children: [
          {
            path: "c",
            element: <Home />,
            meta: {
              icon: "ant-design-home-outlined",
              title: "首页",
              hideMenu: true,
              roles: [1],
            },
          },
        ],
      },
      {
        path: "b",
        element: <Home />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/dashborad-b",
    element: <Home />,
    meta: {
      icon: "ant-design-home-outlined",
      title: "首页",
      hideMenu: true,
    },
  },
];
