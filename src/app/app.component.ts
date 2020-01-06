import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TestMethodResponse} from './Model/Responses';
import {TestMethodRequest} from './Model/Requests';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FortigoMou-WEB';
  result: string;

  constructor() {


  }
}
