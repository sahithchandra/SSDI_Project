import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { SignUp } from '../model/signup.model';

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  private baseUrl = 'http://localhost:9595/ExpenseTracker';

  constructor(private http: HttpClient) { }

  public login(userDTO: SignUp.SignUpDTO) : Observable<any> {
    return of({indicator: false, message: 1 });
    //return this.http.request('POST',`${this.baseUrl}/signup`, { body: userDTO });
  }

}