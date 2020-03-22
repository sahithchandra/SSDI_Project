import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { LoginComponent } from './features/login/component/login.component';
import { LoginService } from './features/login/service/login.service';
import { SignUpComponent } from './features/signup/component/signup.component';
import { SignUpService } from './features/signup/service/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [LoginService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
