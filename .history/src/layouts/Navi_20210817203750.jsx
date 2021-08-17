import { Menu } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";

import React from "react";

export default function Navi() {
  return (
    <div>
      <Header>
        <Menu mode="vertical">
            <Menu.ItemGroup>
                <Menu.Item>1</Menu.Item>
                <Menu.Item>2</Menu.Item>
                <Menu.Item>3</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
      </Header>
    </div>
  );
}
