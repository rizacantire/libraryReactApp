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

    <Menu.Menu position='right'>
      <Dropdown item text='Language'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item>
        <Button primary>Sign Up</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
  );
}
