import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookShowComponent } from './book/book-show/book-show.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path: '',component:BookListComponent},
  {
    path: 'book',canActivate:[AuthGuardService],
    children:[
      {
        path:'list',
        component:BookListComponent,
      },
      {
        path:'add',
        component:BookAddComponent,
      },
      {
        path:'edit/:id',
        component:BookUpdateComponent,
      },
      {
        path:'show/:id',
        component:BookShowComponent,
      },
    ],
  },
  {path: 'login',component:AuthComponent},
  {path: 'not-found',component:FourOhFourComponent},
  {path: '**',redirectTo:'not-found'},
];

/*const routes2: Routes = [
  {path:"book",component:BookComponent},
  {path:"book/add",component:BookAddComponent},
  {path:"book/list",component:BookListComponent},
  {path:"book/edit/:id",component:BookUpdateComponent},
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
