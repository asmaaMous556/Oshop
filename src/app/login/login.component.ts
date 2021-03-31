import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser:any;
  constructor( private auth: AuthService) {

    
   }

  ngOnInit(): void {

  }

  login(){
    this.auth.login();
    this.auth.user$.subscribe(user=>{
      if(user){
        console.log(user.metadata);
        const token =user.getIdToken.toString()
this.currentUser= user;
localStorage.setItem('token',token);
localStorage.setItem('user',this.currentUser);

      }
    })
    
  }
}
