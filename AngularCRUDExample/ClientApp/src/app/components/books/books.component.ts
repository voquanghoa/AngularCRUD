import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookItem } from '../../models/book.item';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: BookItem[] = []
  public isLoading = true;
  public error: string = ""

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(
      books => {
        this.books = books;
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    )
  }

  delete(id: number){
    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    })
  }
}
