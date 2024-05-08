import { RouteObject } from "react-router-dom";

export type RouteItem = RouteObject & {
  meta: {
    title: string;
    order?: number;
    icon: string;
  };
};
