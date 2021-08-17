import React, { useEffect, useState } from "react";
import { Feed, Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Yazar Adı</Table.HeaderCell>
            <Table.HeaderCell>Yazar Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Hakkında</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {authors.map((author) => (
            <Table.Row key={author.id}>
              <Table.Cell>{author.firstName}</Table.Cell>
              <Table.Cell>{author.lastName} 
              &nbsp; {author.authorLastName}</Table.Cell>
              <Table.Cell>{author.birthDate}</Table.Cell>
              <Table.Cell>{author.description}</Table.Cell>
              <Feed.Label  alignment="middle" size="tiny" image={author.bookImageUrl} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
