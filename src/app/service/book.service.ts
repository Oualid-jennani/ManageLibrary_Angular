import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../book/model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksSubject = new Subject<Book[]>();
  private books : Book []  = [];
  private url:string = "http://127.0.0.1:8000/api/books";
  ourArray!:any;

  constructor(private Http:HttpClient) {}

   getBooks():Observable<Book[]>{
    return this.Http.get<Book[]>(this.url);
  }
  
  getBookById(id: number):Observable<Book>{
    let book = this.Http.get<Book>(this.url+"/"+id)
    return book;
  }
  
  public addBook(book:Book) {
    return this.Http.put(this.url+"/add",book)
  }

  public updateBook(book:Book) {
    return this.Http.put(this.url+"/edit/"+book.id,book)
  }

  public deleteBook(id:Number):Observable<any> {
    return this.Http.delete(this.url+"/delete/"+id)
  }

}
