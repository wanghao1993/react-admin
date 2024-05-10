import { RouteMeta, RouteObject } from "react-router-dom";

// @ts-expect-error
export interface AppRouteRecordRaw extends Omit<RouteObject, "meta"> {
  children?: AppRouteRecordRaw[];
  meta?: RouteMeta;
}
