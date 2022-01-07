import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  // form: any = {
  //   username: null,
  //   password: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];
  // lang: string = "fr";
  // value1: string = "fr";
  // stateOptions: any[] = [];


  // libelleFr: string = 'MINISTÈRE DES TRANSPORTS';
  // libelleEnglish: string = 'MINISTRY OF TRANSPORTS';
  // urlImage: string = 'assets/img/amine.jpg';

  constructor(public translate: TranslateService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    //this. test()

    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }

    // this.stateOptions = [{ label: 'Français', value: 'fr' }, { label: 'English', value: 'en' }];

  }

  

}
