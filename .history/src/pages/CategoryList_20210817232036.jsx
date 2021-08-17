import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, List, Menu } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((resut) => setCategories(resut.data.data));
  }, []);
  return (
    <div>
      <Menu vertical size="small" >
        {categories.map((category) => (
          <Menu.Item key={category.categoryId}>
            <Link to={`/bookCategory/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      {categories.map((category) => (
          <Button stackable key={category.categoryId}>
            <Link to={`/bookCategory/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </Button>
        ))}
        {categories.map((category) => (
          <List selection>
            <List.Item>{category.categoryName}</List.Item>
          </List>
        ))}
      
    </div>
  );
}
