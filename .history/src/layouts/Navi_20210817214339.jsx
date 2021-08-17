import { Button, Menu } from "semantic-ui-react";
import React from "react";

export default function Navi() {
  return (
    <Menu>
      <Menu.Item name="home">Ana Sayfa</Menu.Item>
      <Menu.Item name="kitaplar" />
      <Menu.Item name="okunanlar" />
      <Menu.Item name="kutuphanem">Kütüphanem</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Kitap Ekle</Button>
        </Menu.Item>
        <Menu.Item>
          <Button color="green">Yazar Ekle</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
