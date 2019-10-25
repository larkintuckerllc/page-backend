import { gql } from 'apollo-server-express';

export default gql`
  type Book {
    author: String!
    created: String!
    id: String!
    isDeleted: Boolean!
    lastModified: String!
    title: String!
  }

  input BooksPageInput {
    offset: Int!
    first: Int!
  }

  type BooksPage {
    books: [Book]!
    count: Int!
  }

  type Query {
    books: [Book]!
    booksPage(input: BooksPageInput!): BooksPage!
  }
`;
