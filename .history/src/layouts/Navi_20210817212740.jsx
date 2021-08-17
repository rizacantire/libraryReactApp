import { Input, Menu } from 'semantic-ui-react'
import React from "react";
    

export default function Navi() {

  let handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  const { activeItem } = this.state
  return (
    <div>
    
    <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
  
   
    </div>
  );
}
