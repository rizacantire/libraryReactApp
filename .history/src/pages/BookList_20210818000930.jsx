import React, { useEffect, useState } from "react";
import BookService from "../services/bookService";
//import { Link } from "react-router-dom";
import { Card,Image,Feed,Icon } from "semantic-ui-react";

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((resut) => setBooks(resut.data.data));
  }, []);
  return (
    <div>
      <Card.Group itemsPerRow={5} stackable >
        {books.map((book) => (
          <Card style={{ marginTop: 10 }}>
      
             <Feed.Label  alignment="middle" size="tiny" image={book.bookImageUrl} />
    
            <Card.Content>
              <Card.Header>{book.bookName}</Card.Header>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      
    </div>
  );
}
