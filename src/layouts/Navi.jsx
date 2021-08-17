import { Button, Menu } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <Menu>
      {" "}
      <Link to={"/"}>
        <Menu.Item name="home">Ana Sayfa</Menu.Item>{" "}
      </Link>
      <Link>
        <Menu.Item name="kitaplar" />
      </Link>
      <Link to={"/authors"}>
        <Menu.Item name="yazarlar" />
      </Link>
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
