import React, { useEffect, useState } from 'react'
import BookService from "../services/bookService";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function BookList() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        let bookService = new BookService();
        bookService.getBooks().then((resut) => setBooks(resut.data.data))
    }, [])
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
              <Table.Cell><Link to={`/books/${book.bookName}`}>{book.bookName}</Link></Table.Cell>
              <Table.Cell>{book.authorName} 
              &nbsp; {book.authorLastName}</Table.Cell>
              <Table.Cell>{book.page}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}
