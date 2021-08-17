import { Button, Menu,Dropdown } from 'semantic-ui-react'
import React from "react";
    

export default function Navi() {

  return (
    <Menu>
    <Menu.Item
      name='Ana Sayfa'
    />
    <Menu.Item
      name='Kitaplar'
    />
    <Menu.Item
      name='Okunanlar'
    />
    <Menu.Item>Kütüphanem</Menu.Item>



    <Menu.Menu position='right'>
      <Dropdown item text='Language'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item>
        <Button primary>Kitap Ekle</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
  );
}
