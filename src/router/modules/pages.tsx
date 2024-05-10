import { AppRouteRecordRaw } from "../types";
import { LayOut } from "@/layouts";
import BackendPermission from "@/views/permission/backendPermission";
import FrontendPermission from "@/views/permission/frontendPermission";

// 路由配置
export const pagesRoute: AppRouteRecordRaw[] = [
  {
    element: <LayOut />,
    children: [
      {
        path: "/backend-permission",
        element: <BackendPermission />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "后端权限",
        },
      },
      {
        path: "/frontend-permission",
        element: <FrontendPermission />,
        meta: {
          icon: "ant-design-home-outlined",
          title: "前端权限",
        },
      },
    ],
  },
];
