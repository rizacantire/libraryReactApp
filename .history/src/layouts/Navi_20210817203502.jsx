import {  Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";

import React from "react";

export default function Navi() {
  return (
    <div>
      
      <Header>
      <Menu >
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
      </Menu>
      </Header>
  
    </div>
  );
}
