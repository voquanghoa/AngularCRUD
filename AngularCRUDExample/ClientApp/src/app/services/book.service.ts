import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookItem } from '../models/book.item';
import { Observable } from 'rxjs';
import { BookCreate } from '../models/book.create';
import { BookDetail } from '../models/book.detail';
import { BookUpdate } from '../models/book.update';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl: string

  constructor(private readonly http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {
    this.apiUrl = `${baseUrl}api/books`;
  }

  public getAll(): Observable<BookItem[]> {
    return this.http.get<BookItem[]>(this.apiUrl);
  }

  public get(id: number): Observable<BookDetail> {
    return this.http.get<BookDetail>(`${this.apiUrl}/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  public create(bookCreate: BookCreate): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookCreate);
  }

  public update(bookUpdate: BookUpdate): Observable<any> {
    return this.http.put<any>(this.apiUrl, bookUpdate);
  }
}
