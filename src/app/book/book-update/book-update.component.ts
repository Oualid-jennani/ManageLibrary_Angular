import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!:number;
  bookData:any;
  bookForm:any;
  constructor(private formBuilder: FormBuilder,private activatedRoute : ActivatedRoute,private router:Router,private bookService : BookService) {} 
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.bookData={
        code:'',
        name: '',
        author: '',
        status:'',
      }
      this.id = this.activatedRoute.snapshot.params['id'];
    });

    if(this.id!=null){
      this.bookService.getBookById(this.id).subscribe(
        (response)=>{
          this.bookData = response;
          this.bookForm = this.formBuilder.group(this.bookData);
        }
      );
    }
  }

  onSubmit() {
    this.bookService.updateBook(this.bookForm.value).subscribe(
      (response)=>{
        this.returnToListBooks();
      }
    );
  }
  
  returnToListBooks(){
    this.router.navigate(['/book/list']);
  }
}
