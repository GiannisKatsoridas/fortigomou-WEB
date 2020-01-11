import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LoginIndividualRequest, LoginTransporterRequest, RegisterIndividualRequest, RegisterTransporterRequest} from '../Model/Requests';
import {
  LoginIndividualResponse,
  LoginTransporterResponse,
  RegisterIndividualResponse,
  RegisterTransporterResponse
} from '../Model/Responses';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(500)),
  ]),
  ]
})

export class RegisterComponent implements OnInit {

  type: number = 1;
  hasChanged: boolean = false;
  errorMessages: number = 0;
  @ViewChild('registrationIndividualBox', {static: false}) registrationIndividualBox: ElementRef;
  @ViewChild('registrationIndividualText', {static: false}) registrationIndividualText: ElementRef;
  @ViewChild('registrationTransporterBox', {static: false}) registrationTransporterBox: ElementRef;
  @ViewChild('registrationTransporterText', {static: false}) registrationTransporterText: ElementRef;
  @ViewChild('individual_registration', {static: false}) individualRegistration: ElementRef;
  @ViewChild('transporter_registration', {static: false}) transporterRegistration: ElementRef;
  @ViewChild('form_content', {static: false}) formContent: ElementRef;

  @ViewChild('individual_firstname', {static: false}) individualFistname: ElementRef;
  @ViewChild('individual_lastname', {static: false}) individualLastname: ElementRef;
  @ViewChild('individual_gender', {static: false}) individualGender: ElementRef;
  @ViewChild('individual_landline', {static: false}) individualLandline: ElementRef;
  @ViewChild('individual_email', {static: false}) individualEmail: ElementRef;
  @ViewChild('individual_mobile', {static: false}) individualMobile: ElementRef;
  @ViewChild('individual_username', {static: false}) individualUsername: ElementRef;
  @ViewChild('individual_password', {static: false}) individualPassword: ElementRef;
  @ViewChild('individual_password2', {static: false}) individualPassword2: ElementRef;

  @ViewChild('transporter_business_name', {static: false}) transporterBusinessName: ElementRef;
  @ViewChild('transporter_business_title', {static: false}) transporterBusinessTitle: ElementRef;
  @ViewChild('transporter_objective', {static: false}) transporterObjective: ElementRef;
  @ViewChild('transporter_website', {static: false}) transporterWebsite: ElementRef;
  @ViewChild('transporter_vat', {static: false}) transporterVat: ElementRef;
  @ViewChild('transporter_country', {static: false}) transporterCountry: ElementRef;
  @ViewChild('transporter_region', {static: false}) transporterRegion: ElementRef;
  @ViewChild('transporter_prefecture', {static: false}) transporterPrefecture: ElementRef;
  @ViewChild('transporter_city', {static: false}) transporterCity: ElementRef;
  @ViewChild('transporter_address', {static: false}) transporterAddress: ElementRef;
  @ViewChild('transporter_postal_code', {static: false}) transporterPostalCode: ElementRef;
  @ViewChild('transporter_business_phone', {static: false}) transporterBusinessPhone: ElementRef;
  @ViewChild('transporter_contact_name', {static: false}) transporterContactName: ElementRef;
  @ViewChild('transporter_contact_phone', {static: false}) transporterContactPhone: ElementRef;
  @ViewChild('transporter_fax', {static: false}) transporterFax: ElementRef;
  @ViewChild('transporter_email', {static: false}) transporterEmail: ElementRef;
  @ViewChild('transporter_mobile', {static: false}) transporterMobile: ElementRef;
  @ViewChild('transporter_username', {static: false}) transporterUsername: ElementRef;
  @ViewChild('transporter_password', {static: false}) transporterPassword: ElementRef;
  @ViewChild('transporter_password2', {static: false}) transporterPassword2: ElementRef;

  individualLoginSuccessful: boolean;
  private errorMessage: string;

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {

  }

  ngOnInit() {
    this.individualLoginSuccessful = true;
  }

  changeToIndividual() {

    if (this.type == 1) {
      return;
    }

    this.registrationTransporterBox.nativeElement.style.background = '#cccccc';
    this.registrationIndividualBox.nativeElement.style.background = '#02AFF1';

    this.registrationIndividualText.nativeElement.style.color = '#FFFFFF';
    this.registrationTransporterText.nativeElement.style.color = '#02AFF1';

    this.registrationTransporterBox.nativeElement.style.cursor = 'pointer';
    this.registrationIndividualBox.nativeElement.style.cursor = 'auto';

    this.type = 3;

    this.hasChanged = true;

    this.formContent.nativeElement.style.height = '800px';
  }

  changeToTransporter() {

    if (this.type == 2) {
      return;
    }

    this.registrationIndividualBox.nativeElement.style.background = '#cccccc';
    this.registrationTransporterBox.nativeElement.style.background = '#02AFF1';

    this.registrationIndividualText.nativeElement.style.color = '#02AFF1';
    this.registrationTransporterText.nativeElement.style.color = '#FFFFFF';

    this.registrationTransporterBox.nativeElement.style.cursor = 'auto';
    this.registrationIndividualBox.nativeElement.style.cursor = 'pointer';

    this.type = 4;

    this.hasChanged = true;

    this.formContent.nativeElement.style.height = '1700px';
  }

  animationDone($event) {

    if (this.type == 1 && !this.hasChanged) {
      return;
    }

    if (this.type == 3) {
      this.type = 1;
    } else {
      this.type = 2;
    }

    this.hasChanged = false;
  }

  registerIndividual() {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let individualUsername: string = this.individualUsername.nativeElement.value;
    let individualPassword: string = this.individualPassword.nativeElement.value;
    let individualEmail: string = this.individualEmail.nativeElement.value;
    let individualPhoneNumber: string = this.individualMobile.nativeElement.value;
    let individualFirstName: string = this.individualFistname.nativeElement.value;
    let individualLastName: string = this.individualLastname.nativeElement.value;
    let individualLandline: string = this.individualLandline.nativeElement.value;
    let individualGender: number = this.individualGender.nativeElement.value;


    const request: RegisterIndividualRequest = new class implements RegisterIndividualRequest {
      username: string = individualUsername;
      password: string = individualPassword;
      email: string = individualEmail;
      phonenumber: string = individualPhoneNumber;
      firstname: string = individualFirstName;
      lastname: string = individualLastName;
      landline: string = individualLandline;
      gender: number = +individualGender;
      acceptstermsofuse: boolean = true;
    }();

    this.http.post('http://localhost:5000/api/fortigomou/registerindividual', request, httpHeaders).subscribe((data: RegisterIndividualResponse) => {

      if (data.isSuccessful == true) {

        this.cookieService.set("loggedIn", "yes");
        this.cookieService.set("userId", data.result.id);
        this.cookieService.set("username", data.result.userName);
        this.cookieService.set("type", "individual");

        this.redirectTo('home');

      } else {

        console.log(data);

      }

    })

  }

  registerTransporter() {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let transporterBusinessName: string = this.transporterBusinessName.nativeElement.value;
    let transporterBusinessTitle: string = this.transporterBusinessTitle.nativeElement.value;
    let transporterObjective: string = this.transporterObjective.nativeElement.value;
    let transporterWebsite: string = this.transporterWebsite.nativeElement.value;
    let transporterVAT: number = this.transporterVat.nativeElement.value;
    let transporterCountry: number = this.transporterCountry.nativeElement.value;
    let transporterRegion: number = this.transporterRegion.nativeElement.value;
    let transporterPrefecture: number = this.transporterPrefecture.nativeElement.value;
    let transporterCity: string = this.transporterCity.nativeElement.value;
    let transporterAddress: string = this.transporterAddress.nativeElement.value;
    let transporterPostalCode: number = +this.transporterPostalCode.nativeElement.value;
    let transporterBusinessPhone: string = this.transporterBusinessPhone.nativeElement.value;
    let transporterFax: string = this.transporterFax.nativeElement.value;
    let transporterEmail: string = this.transporterEmail.nativeElement.value;
    let transporterContactName: string = this.transporterContactName.nativeElement.value;
    let transporterContactPhone: string = this.transporterContactPhone.nativeElement.value;
    let transporterMobile: string = this.transporterMobile.nativeElement.value;
    let transporterUsername: string = this.transporterUsername.nativeElement.value;
    let transporterPassword: string = this.transporterPassword.nativeElement.value;

    const request: RegisterTransporterRequest = new class implements RegisterTransporterRequest {
      acceptstermsofuse: boolean = true;
      address: string = transporterAddress;
      businessname: string = transporterBusinessName;
      businessphone: string = transporterBusinessPhone;
      businesstitle: string = transporterBusinessTitle;
      city: string = transporterCity;
      contactname: string = transporterContactName;
      contactphone: string = transporterContactPhone;
      country: number = +transporterCountry;
      email: string = transporterEmail;
      fax: string = transporterFax;
      mobilephone: string = transporterMobile;
      objective: string = transporterObjective;
      password: string = transporterPassword;
      postalcode: number = +transporterPostalCode;
      prefecture: number = +transporterPrefecture;
      region: number = +transporterRegion;
      streetno: number = +0;
      username: string = transporterUsername;
      vatnumber: number = +transporterVAT;
      website: string = transporterWebsite;
    };

    this.http.post("http://localhost:5000/api/fortigomou/registertransporter", request, httpHeaders).subscribe((data: RegisterTransporterResponse) => {

      if (data.isSuccessful == true) {

        this.cookieService.set("loggedIn", "yes");
        this.cookieService.set("userId", data.result.id);
        this.cookieService.set("username", data.result.userName);
        this.cookieService.set("type", "transporter");

        this.redirectTo('home');

      } else {

        console.log(data);

      }

    });
  }

  redirectTo(uri: string) {

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));

  }

  loginUser(type: string, username: HTMLInputElement, password: HTMLInputElement) {

    if (+type == 0)
      this.loginIndividual(username, password);
    else
      this.loginTransporter(username, password);

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

      if (data.isSuccessful == false) {
        this.individualLoginSuccessful = false;
        this.errorMessage = data.errorMessage;
        return;
      }

      if (data.individual == null) {
        this.individualLoginSuccessful = false;
        this.errorMessage = "Wrong credentials. Please try again.";
        return;
      }

      this.cookieService.set("loggedIn", "yes");
      this.cookieService.set("type", "individual");
      this.cookieService.set("username", data.individual.userName);
      this.cookieService.set("userId", data.individual.id);

      this.redirectTo('home');
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

      if (data.isSuccessful == false) {
        this.individualLoginSuccessful = false;
        this.errorMessage = data.errorMessage;
        return;
      }

      if (data.transporter == null) {
        this.individualLoginSuccessful = false;
        this.errorMessage = "Wrong credentials. Please try again.";
        return;
      }

      this.cookieService.set("loggedIn", "yes");
      this.cookieService.set("type", "transporter");
      this.cookieService.set("username", data.transporter.userName);
      this.cookieService.set("userId", data.transporter.id);

      this.redirectTo('home');

    });

  }
}
