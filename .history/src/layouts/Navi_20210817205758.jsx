import { Menu } from "antd";


import React from "react";

export default function Navi() {
  return (
    <div>
    
        <Menu mode="horizontal" >
          <Menu.Item>Ana Sayfa</Menu.Item>
          <Menu.Item>Kitaplığım</Menu.Item>
          <div>
          <Menu.Item>Okuduklarım</Menu.Item>
          <Menu.Item>Yazarlar</Menu.Item>
          </div>
          
          <div>
          <Menu.Item>Kitap Ekle</Menu.Item>
          <Menu.Item>Yazar Ekle</Menu.Item>
          </div>
        </Menu>
   
  
   
    </div>
  );
}
