/**
 *
 * @param icon icon的名称
 * @returns
 */
const Icon = ({ icon = "", className = "", ...props }) => {
  // 通过className传递额外的样式类
  return (
    <i
      className={`i-${icon} ${className} inline-block relative top-[2px]`}
      {...props}
    ></i>
  );
};

export default Icon;
