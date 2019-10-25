export interface Book {
  author: string;
  created: number;
  id: string;
  isDeleted: boolean;
  lastModified: number;
  title: string;
}

export interface BooksPage {
  books: Book[];
  count: number;
}

const data = [
  {
    author: 'J.K. Rowling',
    created: 0,
    id: '0',
    isDeleted: false,
    lastModified: 0,
    title: "Philosopher's Stone",
  },
  {
    author: 'J.K. Rowling',
    created: 1,
    id: '1',
    isDeleted: false,
    lastModified: 0,
    title: 'Chamber of Secrets',
  },
  {
    author: 'J.K. Rowling',
    created: 2,
    id: '2',
    isDeleted: false,
    lastModified: 0,
    title: 'The Prisoner of Azkaban',
  },
  {
    author: 'J.K. Rowling',
    created: 3,
    id: '3',
    isDeleted: false,
    lastModified: 0,
    title: 'The Goblet of Fire',
  },
  {
    author: 'J.K. Rowling',
    created: 4,
    id: '4',
    isDeleted: false,
    lastModified: 0,
    title: 'The Order of the Phoenix',
  },
  {
    author: 'J.K. Rowling',
    created: 5,
    id: '5',
    isDeleted: false,
    lastModified: 0,
    title: 'The Half-Blood Prince',
  },
  {
    author: 'J.K. Rowling',
    created: 6,
    id: '6',
    isDeleted: false,
    lastModified: 0,
    title: 'The Deathly Hallows',
  },
] as Book[];

const filterNotDeleted = (book: Book): boolean => !book.isDeleted;
const sortCreated = (a: Book, b: Book): number => a.created - b.created;

export const books = (): Book[] => data.filter(filterNotDeleted);

export const booksPage = (offset: number, first: number): BooksPage => {
  const count = data.length;
  if (offset < 0 || first < 0 || offset > count - 1) {
    throw new Error('400');
  }
  const sortedData = data.sort(sortCreated);
  const slicedData =
    offset + first >= count ? sortedData.slice(offset) : sortedData.slice(offset, offset + first);
  const filteredData = slicedData.filter(filterNotDeleted);
  return {
    books: filteredData,
    count,
  };
};
