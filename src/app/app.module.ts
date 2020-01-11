import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { MainComponent } from './main/main.component';

import {CookieService} from 'ngx-cookie-service';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CompareValidationDirective} from './shared/compare-validation.directive';
import { PostMovingRequestComponent } from './post-moving-request/post-moving-request.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule} from '@angular/material';

export const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'register', component: RegisterComponent},
  { path: '' , redirectTo:'/home',pathMatch:'full' },
  { path: 'postrequest', component: PostMovingRequestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    NavbarComponent,
    CompareValidationDirective,
    PostMovingRequestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
