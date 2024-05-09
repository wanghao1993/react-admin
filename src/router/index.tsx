import { RouteObject, createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./modules/constants";
import { getRoutes } from "./utils";
import { AppRouteRecordRaw } from "./types";
import { dashbordRoute } from "./modules/dashborad";

const route: AppRouteRecordRaw[] = [...homeRoute, ...dashbordRoute];
const list = getRoutes(route) as unknown as RouteObject[];
console.log(list);
export const routes = createBrowserRouter(list);
