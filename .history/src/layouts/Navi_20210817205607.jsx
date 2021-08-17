import { Menu } from "antd";


import React from "react";

export default function Navi() {
  return (
    <div>
    
        <Menu mode="horizontal" >
          <Menu.Item style={marginLeft:20}>Ana Sayfa</Menu.Item>
          <Menu.Item>Kitaplığım</Menu.Item>
          <Menu.Item>Okuduklarım</Menu.Item>
          <Menu.Item>Yazarlar</Menu.Item>
        </Menu>
        <Menu mode="horizontal">
        <Menu.Item>Kitap Ekle</Menu.Item>
          <Menu.Item>Yazar Ekle</Menu.Item>
        </Menu>
  
   
    </div>
  );
}
