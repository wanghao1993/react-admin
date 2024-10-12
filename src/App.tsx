import { RouterProvider } from "react-router-dom";
import { routes } from "@/router";
import { ConfigProvider } from "antd";
import ThemeProvider from "./provider/themeprovider";
function App() {
  return (
    <>
      <ThemeProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#9741c6",
              colorInfo: "#9741c6",
              colorTextBase: "#403131e3",
              fontSize: 14,
              colorBgBase: "#ffffff",
              sizeStep: 4,
              borderRadius: 4,
            },
            components: {
              Layout: {
                headerHeight: 52,
              },
            },
          }}
        >
          <RouterProvider router={routes} />
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
