import React, { useEffect, useState } from 'react'
import BookService from "./bookService";

export default function BookList() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        let bookService = new BookService();
        bookService.getBooks().then((resut) => setBooks(resut.data.data))
    }, [])
    return (
        <div>
            
        </div>
    )
}
