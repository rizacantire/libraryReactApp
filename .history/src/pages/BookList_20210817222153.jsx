import React, { useEffect, useState } from "react";
import BookService from "../services/bookService";
import { Link } from "react-router-dom";
import { Icon, Table,Card, Image } from "semantic-ui-react";

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
      <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    </div>
  );
}
