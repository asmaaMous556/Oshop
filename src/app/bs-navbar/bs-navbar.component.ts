import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {   Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

appUser:AppUser;

  constructor( private auth: AuthService ) {
   // this.auth.user$;
  auth.appUser$.subscribe(appUser=>this.appUser=appUser)

  }

  logout(){
    this.auth.logout();

  }

}
