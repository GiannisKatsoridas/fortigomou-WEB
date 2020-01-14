import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper, MatStepper} from '@angular/material';

import {
  PropertyType,
  PersonnelArray,
  LivingRoom,
  Bedroom,
  Office,
  Bathroom,
  Kitchen,
  Garage,
  Outdoor,
  Various,
  httpHeaders
} from '../shared/static_arrays';
import {HttpClient} from '@angular/common/http';
import {GetCountriesResponse} from '../Model/Responses';

@Component({
  selector: 'app-post-moving-request',
  templateUrl: './post-moving-request.component.html',
  styleUrls: ['./post-moving-request.component.css']
})
export class PostMovingRequestComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  category_number: number;
  category_name: string;

  PersonnelArray: string[];
  PropertyType: string[];
  LivingRoom: string[];
  Bedroom: string[];
  Office: string[];
  Bathroom: string[];
  Kitchen: string[];
  Garage: string[];
  Outdoor: string[];
  Various: string[];

  Countries: string[];

  priceLimit: number = 0;

  @ViewChild('div', {static: false}) myDiv: ElementRef;
  @ViewChild('step1', {static: false}) step1: ElementRef;
  @ViewChild('stepper', {static: false}) stepper: MatStepper;

  @ViewChild('priceAmountInput', {static: false}) priceAmount: ElementRef;

  @ViewChild('nav2', {static: false}) nav2: ElementRef;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {

    this.PersonnelArray = PersonnelArray;
    this.PropertyType = PropertyType;
    this.LivingRoom = LivingRoom;
    this.Bedroom = Bedroom;
    this.Office = Office;
    this.Bathroom = Bathroom;
    this.Kitchen = Kitchen;
    this.Garage = Garage;
    this.Outdoor = Outdoor;
    this.Various = Various;

    this.http.post('http://localhost:5000/api/fortigomou/getcountries', null, httpHeaders).subscribe((data: GetCountriesResponse) => {

      this.Countries = data.countries;

    });

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

  }

  collapse(content1: HTMLDivElement, i1: HTMLElement, array: string[], div: HTMLDivElement) {

    console.log(content1.style.display);

    if(content1.style.display == 'block') {
      content1.style.display = 'none';
      i1.className = 'fa fa-angle-down fa-2x mr-3';
      if(array == null) {
        let temp: number = div.offsetHeight - 250;
        div.style.height = temp + "px";
      }
      else {
        let temp: number = div.offsetHeight - (array.length / 3) * 55;
        div.style.height = temp + "px";
      }
    }
    else {
      content1.style.display = 'block';
      i1.className = 'fa fa-angle-up fa-2x mr-3';
      if(array == null) {
        let temp: number = div.offsetHeight + 250;
        div.style.height = temp + "px";
      }
      else {
        let temp: number = div.offsetHeight + (array.length / 3) * 55;
        div.style.height = temp + "px";
      }
    }
  }

  stepForth(stepper: MatHorizontalStepper, i: number, li1: HTMLLIElement) {

    this.category_number = i;
    this.category_name = li1.innerText;

    this.myDiv.nativeElement.style.height = '1700px';

    stepper.selected.completed = true;

    stepper.next();

  }

  showPriceAmount(price_amount: HTMLDivElement) {

    if(price_amount.style.display != 'none') {
      price_amount.style.display = 'none';
      this.priceLimit = 0;
    }
    else {
      price_amount.style.display = 'block';
      this.priceLimit = +this.priceAmount.nativeElement.value;
    }

  }

  stepBack(stepper: MatHorizontalStepper | MatStepper) {

    stepper.previous();

  }

  stepForth2(stepper: MatHorizontalStepper | MatStepper) {

    stepper.selected.completed = true;

    stepper.next();

  }
}
