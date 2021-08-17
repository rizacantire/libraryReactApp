import { Input, Menu } from 'semantic-ui-react'
import React from "react";
    

export default function Navi() {

  return (
    <div>
    
    <Menu stackable>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
          />
        </Menu.Menu>
      </Menu>
  
   
    </div>
  );
}
