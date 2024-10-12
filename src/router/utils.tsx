import { routeRaw } from ".";
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

export const flatterRoutes = (routes: AppRouteRecordRaw[], result: any[]) => {
  const arr = result;

  for (const route of routes) {
    arr.push({
      href: route.path,
      title: route.meta?.title,
    });
    if (route.children) {
      flatterRoutes(route.children, arr);
    }
  }

  return arr;
};
export const getBreadcrumbItems = (path: string) => {
  const flatterRoutesResult = flatterRoutes(routeRaw, []);
  const breadcrumbItems: { href: string; title: string }[] = [
    {
      href: "/",
      title: "首页",
    },
  ];
  for (const pathItem of path.split("/")) {
    if (pathItem) {
      const routeItem = flatterRoutesResult.find(
        (route) => route.href === `/${pathItem}`
      );
      if (routeItem) {
        breadcrumbItems.push(routeItem);
      }
    }
  }
  return breadcrumbItems;
};
