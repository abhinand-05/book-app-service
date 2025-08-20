import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../service/book.service';
import { Book, Genre } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  bookForm: FormGroup;

  // For select dropdown
  genres: Genre[] = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography' ,'Mystery', 'Romance', 'Philosophy','Fantasy','Thriller'];

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: Date.now(),
        ...this.bookForm.value
      };
      this.bookService.addBook(newBook);
      alert('Book added successfully!');
      this.bookForm.reset();
    } else {
      this.bookForm.markAllAsTouched(); // show all validation errors
    }
  }
}
