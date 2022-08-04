import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Book } from '../book/model/book.model';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements OnInit{

  @Input() appStatusColor:Book = new Book();
  constructor(private el: ElementRef) {

    
  }
  ngOnInit(): void {
    if(this.appStatusColor.status == "disponible"){
      this.el.nativeElement.style.color = 'blue';
    }
    else if(this.appStatusColor.status == "pas disponible"){
      this.el.nativeElement.style.color = 'red';
    }    
  }


}
