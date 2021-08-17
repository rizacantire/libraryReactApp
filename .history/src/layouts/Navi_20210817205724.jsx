import { Menu } from "antd";


import React from "react";

export default function Navi() {
  return (
    <div>
    
        <Menu mode="horizontal" >
          <Menu.Item style={{float:"left"}}>Ana Sayfa</Menu.Item>
          <Menu.Item>Kitaplığım</Menu.Item>
          <Menu.Item>Okuduklarım</Menu.Item>
          <Menu.Item>Yazarlar</Menu.Item>
          <div>
          <Menu.Item>Kitap Ekle</Menu.Item>
          <Menu.Item>Yazar Ekle</Menu.Item>
          </div>
        </Menu>
        <Menu mode="horizontal">
        
        </Menu>
  
   
    </div>
  );
}
