import { Book, books, booksPage } from './books';

interface BooksPageArgsInput {
  offset: number;
  first: number;
}

interface BooksPageArgs {
  input: BooksPageArgsInput;
}

interface BookGraphQL {
  author: string;
  created: string;
  id: string;
  isDeleted: boolean;
  lastModified: string;
  title: string;
}

interface BooksPageGraphQL {
  books: BookGraphQL[];
  count: number;
}

const bookToGraphQL = (book: Book): BookGraphQL => {
  const createdStr = book.created.toString();
  const lastModifiedStr = book.lastModified.toString();
  const bookGraphQL = { ...book, created: createdStr, lastModified: lastModifiedStr };
  return bookGraphQL;
};

export default {
  Query: {
    books: (): Book[] => books(),
    booksPage: (obj: {}, { input: { offset, first } }: BooksPageArgs): BooksPageGraphQL => {
      const { books: booksRaw, count } = booksPage(offset, first);
      return {
        books: booksRaw.map(bookToGraphQL),
        count,
      };
    },
  },
};
