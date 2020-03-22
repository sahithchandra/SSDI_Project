import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private baseUrl = 'http://localhost:9595/ExpenseTracker';

  constructor(private http: HttpClient) { }

  public login(userDTO: Login.LoginDTO) : Observable<any> {
   // return of({indicator: false, message: 3});
    return this.http.request('POST',`${this.baseUrl}/signin`, { body: userDTO });
  }

}