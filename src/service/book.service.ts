import { Injectable } from '@angular/core';
import { Book, Genre } from '../app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Access Modifiers
  private books: Book[] = [
    { id: 1, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', available: true },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Non-Fiction', available: true },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', available: false },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', available: true },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', available: true },
    { id: 6, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Non-Fiction', available: false },
    { id: 7, title: 'The Martian', author: 'Andy Weir', genre: 'Sci-Fi', available: true },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Non-Fiction', available: true },
    { id: 9, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', available: true },
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Non-Fiction', available: false },
    { id: 11, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy', available: true },
    { id: 12, title: 'Foundation', author: 'Isaac Asimov', genre: 'Sci-Fi', available: true },
    { id: 13, title: 'The Road', author: 'Cormac McCarthy', genre: 'Sci-Fi', available: false },
    { id: 14, title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Thriller', available: true },
    { id: 15, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genre: 'Mystery', available: true },
    { id: 16, title: 'Life of Pi', author: 'Yann Martel', genre: 'Non-Fiction', available: false },
    { id: 17, title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'Thriller', available: true },
    { id: 18, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Philosophy', available: true },
    { id: 19, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Non-Fiction', available: false },
    { id: 20, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', available: true },
    { id: 21, title: 'Educated', author: 'Tara Westover', genre: 'Thriller', available: true }
  ];

  constructor() {}

  public getBooks(): Book[] {
    return this.books;
  }

  public getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public filterBooks<T extends keyof Book>(key: T, value: Book[T]): Book[] {
    return this.books.filter(book => book[key] === value);
  }
}
