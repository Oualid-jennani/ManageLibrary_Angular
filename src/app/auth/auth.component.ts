import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output()authStatus!:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }


  onSignIn(): void{
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        console.log("connection reussie");
      }
    )
  }

  onSignOut(): void{
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
