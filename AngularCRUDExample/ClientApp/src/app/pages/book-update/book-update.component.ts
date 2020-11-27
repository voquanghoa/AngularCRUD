import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {

  public id: number
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }
}
