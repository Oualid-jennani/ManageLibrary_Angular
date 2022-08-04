import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authStatus!:boolean;
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
