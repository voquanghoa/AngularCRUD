import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { BookCreate } from '../../models/book.create';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.css']
})
export class BookCreateFormComponent implements OnInit {
  public bookForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bookService: BookService,
    private readonly router: Router,
  ) {
    this.bookForm = this.formBuilder.group({
      name: '',
      year: '',
      author: '',
      description: '',
      publishDate: null
    });
  }

  ngOnInit() {
  }

  onSubmit(book: BookCreate) {
    this.bookService.create(book)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
