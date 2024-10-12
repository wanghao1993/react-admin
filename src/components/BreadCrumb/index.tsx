import { getBreadcrumbItems } from "@/router/utils";
import { Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const route = useLocation();

  const [items, setItems] = useState<{ href: string; title: string }[]>([]);
  useEffect(() => {
    const items = getBreadcrumbItems(route.pathname);
    setItems(items);
  }, [route]);
  return <Breadcrumb items={items} />;
}
