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

  constructor(private http: HttpClient) {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const request: TestMethodRequest = new class implements TestMethodRequest {
      request: 0;
    }();

    // tslint:disable-next-line:max-line-length
    this.http.post<TestMethodResponse>('http://localhost:5000/api/fortigomou/testmethod', request, httpHeaders).subscribe((data: TestMethodResponse) => {
      this.result = data.result;
    });

  }
}
