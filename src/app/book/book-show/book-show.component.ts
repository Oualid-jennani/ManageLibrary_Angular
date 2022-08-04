import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  id!:number;
  book!:Book;
  bookForm:any;
  constructor(private activatedRoute : ActivatedRoute,private router:Router,private bookService : BookService) {} 
  
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id!=null){
      this.bookService.getBookById(this.id).subscribe(
        (response)=>{
          this.book = response;
        }
      );
    }
  }
  
  returnToListBooks(){
    this.router.navigate(['/book/list']);
  }

}
