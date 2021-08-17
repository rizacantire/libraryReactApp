import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService'

export default function CategoryList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories().then(resut=>setCategories(resut.data.data));
    }, []);
    return (
        <div>
            
        </div>
    )
}
