import { useEffect, useState } from "react";

interface IconProps {
  iconSet?: string;
  icon: string;
  color?: string;
  size?: number;
  extraClass?: string;
}
const defaultConfig: IconProps = {
  iconSet: "ant-design",
  size: 18,
  icon: "",
};

export default function Icon(props: IconProps) {
  const [className, setClassName] = useState("");

  const iconProps = { ...defaultConfig, ...props };
  useEffect(() => {
    let classStr = `i-${iconProps.iconSet}-${iconProps.icon} inline-block`;
    if (iconProps.extraClass) {
      classStr += ` ${iconProps.extraClass}`;
    }
    setClassName(classStr);
  }, [iconProps]);
  return (
    <>
      <span
        style={{ fontSize: `${props.size}px`, color: props.color }}
        className={className}
      ></span>
    </>
  );
}
