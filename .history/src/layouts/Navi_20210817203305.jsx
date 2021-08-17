import { Divider, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

import React from "react";

export default function Navi() {
  return (
    <div>
      <Divider type="horizontal">
      <Menu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
      </Menu>
      </Divider>
    </div>
  );
}
