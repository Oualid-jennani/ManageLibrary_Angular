import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { WordCountPipe } from './pipe/word-count.pipe';
import { PowPipe } from './pipe/pow.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { StatusColorDirective } from './directive/status-color.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { BookShowComponent } from './book/book-show/book-show.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    BookUpdateComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    WordCountPipe,
    PowPipe,
    OrderPipe,
    StatusColorDirective,
    AuthComponent,
    BookShowComponent,
    FourOhFourComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
