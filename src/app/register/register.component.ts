import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ]),
  ]
})

export class RegisterComponent implements OnInit {

  type: number = 1;
  hasChanged: boolean = false;
  @ViewChild('registrationIndividualBox', {static: false}) registrationIndividualBox: ElementRef;
  @ViewChild('registrationIndividualText', {static: false}) registrationIndividualText: ElementRef;
  @ViewChild('registrationTransporterBox', {static: false}) registrationTransporterBox: ElementRef;
  @ViewChild('registrationTransporterText', {static: false}) registrationTransporterText: ElementRef;
  @ViewChild('individual_registration', {static: false}) individualRegistration: ElementRef;
  @ViewChild('transporter_registration', {static: false}) transporterRegistration: ElementRef;


  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {
  }

  ngOnInit() {
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
  }

  animationDone($event) {

    if(this.type == 1 && !this.hasChanged)
      return;

    if(this.type == 3)
      this.type = 1;
    else
      this.type = 2;

    this.hasChanged = false;
  }
}
