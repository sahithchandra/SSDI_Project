import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { LoginService } from '../service/login.service';
import { FormArrayName, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormbuilder: FormGroup; 
  public spinner: boolean = true;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit() {    
    
    this.loginFormbuilder =  this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

   this.spinner = false;
   console.log(this.loginFormbuilder.valid)
  }

  public routeToSignup() {
    this.router.navigate(['/SignUp']);
  }

  public onSubmit() {
    this.spinner = true;
    let userDTO: Login.LoginDTO = {
      email: this.loginFormbuilder.value.email,
      password: this.loginFormbuilder.value.password
    }

    this.loginService.login(userDTO).subscribe((response: any)=>{
      this.spinner = false;
      console.log(response);
      if(response.indicator) {
        alert('Login Successful');
      }else {
        if(response.message == 3) {
          alert('The email you enter is not registered with us.');
        } else if(response.message == 2) {
          alert('The password is incorrect.');
        }
      }
    });
  }
}