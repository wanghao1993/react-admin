import React from "react";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "个人信息",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "登出",
    icon: <LoginOutlined />,
  },
];

const Profile: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    </a>
  </Dropdown>
);

export default Profile;
