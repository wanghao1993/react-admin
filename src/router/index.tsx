import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./modules/constants";
import { getRoutes } from "./utils";
import type { AppRouteRecordRaw } from "./types";
import { pagesRoute } from "./modules/pages";

const route: AppRouteRecordRaw[] = [...homeRoute, ...pagesRoute];
const list = getRoutes(route) as unknown as RouteObject[];

export const routes = createBrowserRouter(list);
export const routeRaw = list;
