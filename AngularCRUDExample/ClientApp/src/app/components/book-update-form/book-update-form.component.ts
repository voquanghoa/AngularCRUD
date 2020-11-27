import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { BookUpdate } from '../../models/book.update';

@Component({
  selector: 'app-book-update-form',
  templateUrl: './book-update-form.component.html',
  styleUrls: ['./book-update-form.component.css']
})
export class BookUpdateFormComponent implements OnInit {

  @Input() id: number;

  public bookForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bookService: BookService,
    private readonly router: Router,
  ) {
    this.bookForm = this.formBuilder.group({
      id: '',
      name: '',
      year: '',
      author: '',
      description: '',
    });
  }

  ngOnInit() {
    this.bookService.get(this.id)
      .subscribe(book => {
        this.bookForm.patchValue(book);
      });
  }

  onSubmit(book: BookUpdate) {
    this.bookService.update(book)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
