import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { SignUpService } from '../service/signup.service';
import { FormArrayName, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../model/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  public SignUpFormbuilder: FormGroup; 
  public spinner: boolean = true;

  constructor(
    private SignUpService: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit() {    
    
    this.SignUpFormbuilder =  this.formBuilder.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],  
      passwordConfirm: ['', [Validators.required]]
    });
    this.spinner = false;
  }

  public routeToSignIn () {
    this.router.navigate(['/Login'])

  }

  public onSubmit() {
    this.spinner = true;
    let userDTO: SignUp.SignUpDTO = {
      email: this.SignUpFormbuilder.value.email,
      username: this.SignUpFormbuilder.value.username,
      password: this.SignUpFormbuilder.value.password,
      passwordConfirm: this.SignUpFormbuilder.value.passwordConfirm
    }
    console.log(userDTO);
    this.SignUpService.login(userDTO).subscribe((response: any)=>{
      console.log(response)
      this.spinner = false;
      if(response.indicator) {
        alert('SignUp Successful');
        this.router.navigate(['/Login'])
      }else {
        if(response.message == 1) {
          alert('The email you enter is already registered with us.');
        } 
      }
    });
  }
}