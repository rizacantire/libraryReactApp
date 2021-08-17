import React, { useEffect, useState } from "react";
import BookService from "../services/bookService";
import { Link } from "react-router-dom";
import { Icon, Table, Card, Grid } from "semantic-ui-react";

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((resut) => setBooks(resut.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kitap Adı</Table.HeaderCell>
            <Table.HeaderCell>Yazar</Table.HeaderCell>
            <Table.HeaderCell>Sayfa</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {books.map((book) => (
            <Table.Row key={book.id}>
              <Table.Cell>
                <Link to={`/books/${book.bookName}`}>{book.bookName}</Link>
              </Table.Cell>
              <Table.Cell>
                {book.authorName}
                &nbsp; {book.authorLastName}
              </Table.Cell>
              <Table.Cell>{book.page}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Grid>
        <Grid.Row>
          {books.map((book) => (
            <Grid.Column width={3}>

              <Card className="book-card" style={margin:"15"}>
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
