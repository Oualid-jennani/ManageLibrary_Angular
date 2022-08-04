import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';



@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private bookService:BookService,private activatedRoute : ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }
   
  bookData:any;
  bookForm:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{

      this.bookData={
        code:'',
        name: '',
        author: '',
        status: '',
      }
      this.bookForm= this.formBuilder.group(this.bookData);
    });
  }

  onSubmit() {
    this.bookService.addBook(this.bookForm.value).subscribe(
      (response) => {
        this.returnToListBooks();
      }
    );
  }
  
  returnToListBooks(){
    this.router.navigate(['/book/list']);
  }
}
