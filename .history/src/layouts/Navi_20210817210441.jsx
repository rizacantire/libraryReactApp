import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";


import React from "react";

export default function Navi() {
  return (
    <div>
    
        <Header>
        <Menu mode="horizontal"  style={{float:"left"}} >
          <Menu.Item>Ana Sayfa</Menu.Item>
          <Menu.Item>Kitaplığım</Menu.Item>
          <Menu.Item>Okuduklarım</Menu.Item>
          <Menu.Item>Yazarlar</Menu.Item>
        
          
        </Menu>
        <Menu mode="horizontal">
            <Menu.Item>Kitap Ekle</Menu.Item>
            <Menu.Item>Yazar Ekle</Menu.Item>
        </Menu>
        </Header>
   
  
   
    </div>
  );
}
