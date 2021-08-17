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
      
        {categories.map((category) => (
          <List selection>
            <List.Item><Link to={`/bookCategory/${category.categoryId}`}>
              {category.categoryName}
            </Link></List.Item>
          </List>
        ))}
      
    </div>
  );
}
