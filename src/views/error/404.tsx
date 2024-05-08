import notFount from "@/assets/404.svg";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon/index.tsx";
export default function Error404Page() {
  return (
    <div id="error-page">
      <div className="text-center flex justify-center text-2xl text-[#1C3177] mt-20">
        <p>页面未找到或没权限</p>
        <div>
          <Link to="/">回到首页</Link>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <img src={notFount} alt="未找到页面" />
      </div>
      <div className="text-center flex justify-center text-xl text-[#1C3177]">
        <div>
          <Link to="/" className="border-b">
            <Icon icon="rollback-outlined" iconSet="ant-design" />
            回到首页
          </Link>
        </div>
      </div>
    </div>
  );
}
