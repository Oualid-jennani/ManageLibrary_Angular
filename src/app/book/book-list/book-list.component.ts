import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books:Book[] = [];
  searchText!:string;
  constructor(private router : Router,public bookService:BookService) { 
  
  }

  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks(){
    this.bookService.getBooks().subscribe(
      (response) => {
        this.books = response;
      },
    )
  }

  onDelete(id:Number) {
    this.bookService.deleteBook(id).subscribe(
      (response) => {
        this.ngOnInit();
      }
    );
  }

  showBook(id:Number) {
    this.router.navigate(["book/show/"+id]);
  }

  editBook(id:Number) {
    this.router.navigate(["book/edit/"+id]);
  }
  
  returnToListBooks(){
    this.router.navigate(['/book/list']);
  }

  ngOnDestroy() {

  }

}
