import { Menu } from "antd";


import React from "react";

export default function Navi() {
  return (
    <div>
    
        <Menu mode="horizontal" >
          <Menu.Item>Ana Sayfa</Menu.Item>
          <Menu.Item>Kitaplığım</Menu.Item>
          <Menu.Item>Okuduklarım</Menu.Item>
          <Menu.Item>Yazarlar</Menu.Item>
 
          <Menu.Item>Kitap Ekle</Menu.Item>
          <Menu.Item>Yazar Ekle</Menu.Item>
        </Menu>
   
  
   
    </div>
  );
}
