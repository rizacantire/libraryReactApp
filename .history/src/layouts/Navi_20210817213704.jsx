import { Button, Menu,Dropdown } from 'semantic-ui-react'
import React from "react";
    

export default function Navi() {

  return (
    <Menu>
    <Menu.Item
      name='home'>Ana Sayfa</Menu.Item>
    <Menu.Item
      name='kitaplar'
    />
    <Menu.Item
      name='okunanlar'
    />
    <Menu.Item name="kutuphanem">Kütüphanem</Menu.Item>



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
