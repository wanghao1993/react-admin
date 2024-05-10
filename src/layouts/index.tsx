import { Header } from "./header";
import { Outlet } from "react-router-dom";
export function LayOut() {
  return (
    <>
      <main>
        <Header></Header>
        <div className="flex">
          <div className="sider w-[160px] h-[calc(100vh-48px)] ">sider</div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
