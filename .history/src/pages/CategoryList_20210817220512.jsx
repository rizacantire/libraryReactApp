import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react';
import CategoryService from '../services/categoryService'

export default function CategoryList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories().then(resut=>setCategories(resut.data.data));
    }, []);
    return (
        <div>
            
            <Menu vertical>
      {categories.map((category) => (
            <Menu.Item key={category.categoryId}>
              <Link to={`/bookCategory/${category.categoryId}`}>{category.categoryName}</Link>
            </Menu.Item>
          ))}
      </Menu>
        </div>
    )
}