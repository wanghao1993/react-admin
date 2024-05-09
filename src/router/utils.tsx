import { AppRouteRecordRaw } from "./types";
import { cloneDeep } from "lodash-es";

function filterByProperty(routes: AppRouteRecordRaw[]) {
  return routes.reduce((acc: AppRouteRecordRaw[], route: AppRouteRecordRaw) => {
    const { children, ...currentRoute } = route;

    const newRoute: AppRouteRecordRaw = cloneDeep(currentRoute);

    if (
      newRoute.meta &&
      newRoute.meta.roles &&
      !newRoute.meta.roles.includes(2)
    ) {
      return acc;
    }

    if (children && Array.isArray(children)) {
      newRoute.children = filterByProperty(children);
    }

    if (
      !newRoute.meta ||
      !newRoute.meta.roles ||
      newRoute.meta.roles.includes(2)
    ) {
      acc.push(newRoute);
    }
    return acc;
  }, []);
}

export const getRoutes = (routes: AppRouteRecordRaw[]) => {
  return filterByProperty(routes);
};
