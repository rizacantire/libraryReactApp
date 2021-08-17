import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import AuthorService from "../services/authorService";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    let authorService = new AuthorService();
    authorService.getAuthors().then((result) => setAuthors(result.data.data));
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
          {authors.map((author) => (
            <Table.Row key={author.id}>
              <Table.Cell>{author.firstName}</Table.Cell>
              <Table.Cell>{author.lastName} 
              &nbsp; {author.authorLastName}</Table.Cell>
              <Table.Cell>{author.page}</Table.Cell>
              <Table.Cell>{author.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
