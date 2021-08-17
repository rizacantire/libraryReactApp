import  { Menu,SubMenu } from 'antd/lib/layout/layout'

import React from 'react'

export default function Navi() {
    return (
        <div>
            <Menu>
  <Menu.Item>Menu</Menu.Item>
  <SubMenu title="SubMenu">
    <Menu.Item>SubMenuItem</Menu.Item>
  </SubMenu>
</Menu>
            
        </div>
    )
}
