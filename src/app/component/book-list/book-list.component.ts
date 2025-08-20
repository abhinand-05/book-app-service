import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import { Book, Genre } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';

 
  genreFilter: Genre | '' = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
  
  search(): void {
    this.books = this.bookService.getBooks().filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterBooks(): void {
    if (this.genreFilter) {
      // Tell TypeScript this is a valid Genre
      this.books = this.bookService.filterBooks('genre', this.genreFilter as Genre);
    } else {
      this.books = this.bookService.getBooks();
    }
  }
}

