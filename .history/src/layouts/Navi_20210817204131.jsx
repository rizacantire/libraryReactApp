import { Menu } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";

import React from "react";

export default function Navi() {
  return (
    <div>
      <Header>
        <Menu mode="horizontal" >
          <Menu.Item key="1">1</Menu.Item>
        </Menu>
        <Menu mode="horizontal">
          <Menu.Item key="2">2</Menu.Item>
        </Menu>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}
