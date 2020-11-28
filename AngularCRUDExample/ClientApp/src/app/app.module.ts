import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookCreateFormComponent } from './components/book-create-form/book-create-form.component';
import { BookNewComponent } from './pages/book-new/book-new.component';
import { BookUpdateFormComponent } from './components/book-update-form/book-update-form.component';
import { BookUpdateComponent } from './pages/book-update/book-update.component';
import { DateValuePipeAccessor } from './pipe/date.value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    BooksComponent,
    BookNewComponent,
    BookCreateFormComponent,
    BookUpdateFormComponent,
    BookUpdateComponent,
    DateValuePipeAccessor
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'new', component: BookNewComponent, pathMatch: 'full' },
      { path: 'books/:id', component: BookUpdateComponent }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
