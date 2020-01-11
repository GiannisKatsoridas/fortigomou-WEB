import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {LoginIndividualRequest, LoginTransporterRequest} from '../Model/Requests';
import {LoginIndividualResponse, LoginTransporterResponse} from '../Model/Responses';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  individualLoginSuccessful: boolean;
  private errorMessage: string;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {

    // this.username = cookieService.get("username");
    // this.individualLoginSuccessful = true;

  }

  ngOnInit() {
    this.username = this.cookieService.get("username");
    this.individualLoginSuccessful = true;
  }

  displayLoginIndividual() {

    const x = document.querySelector('#login_individual') as HTMLElement;

    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }

    (document.querySelector('#login_transporter') as HTMLElement).style.display = 'none';
  }

  displayLoginTransporter() {

    const x = document.querySelector('#login_transporter') as HTMLElement;

    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }

    (document.querySelector('#login_individual') as HTMLElement).style.display = 'none';

  }

  loginIndividual(username: HTMLInputElement, password: HTMLInputElement) {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const request: LoginIndividualRequest = new class implements LoginIndividualRequest {
      username: string = username.value;
      password: string = password.value;
    }();

    this.http.post('http://localhost:5000/api/fortigomou/loginindividual', request, httpHeaders).subscribe((data: LoginIndividualResponse) => {

      if(data.isSuccessful == false) {
        this.individualLoginSuccessful = false;
        this.errorMessage = data.errorMessage;
        return;
      }

      if(data.individual == null){
        this.individualLoginSuccessful = false;
        this.errorMessage = "Wrong credentials. Please try again.";
        return;
      }

      this.cookieService.set("loggedIn", "yes");
      this.cookieService.set("type", "individual");
      this.cookieService.set("username", data.individual.userName);
      this.cookieService.set("userId", data.individual.id);

      this.username = data.individual.userName;

    });

  }

  loginTransporter(username: HTMLInputElement, password: HTMLInputElement) {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const request: LoginTransporterRequest = new class implements LoginTransporterRequest {
      username: string = username.value;
      password: string = password.value;
    }();

    this.http.post('http://localhost:5000/api/fortigomou/logintransporter', request, httpHeaders).subscribe((data: LoginTransporterResponse) => {

      if(data.isSuccessful == false) {
        this.individualLoginSuccessful = false;
        this.errorMessage = data.errorMessage;
        return;
      }

      if(data.transporter == null){
        this.individualLoginSuccessful = false;
        this.errorMessage = "Wrong credentials. Please try again.";
        return;
      }

      this.cookieService.set("loggedIn", "yes");
      this.cookieService.set("type", "transporter");
      this.cookieService.set("username", data.transporter.userName);
      this.cookieService.set("userId", data.transporter.id);

      this.username = data.transporter.userName;

    });

  }

  logout() {

    this.cookieService.delete("loggedIn");
    this.cookieService.delete("type");
    this.cookieService.delete("username");
    this.cookieService.delete("userId");

  }


  routeRegister() {

    this.router.navigate(['register']);

  }

  routeHome() {

    this.router.navigate(['home']);

  }

  routePostRequest() {
    this.router.navigate(['postrequest'])
  }
}
