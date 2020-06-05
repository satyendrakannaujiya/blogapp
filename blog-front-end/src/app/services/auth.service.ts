import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }



  signUp(userObject):Observable<any>{
   
      return this.http.post(environment.apiUrl+'/register',userObject);
  }
  login(userObject):Observable<any>{
       console.log("User service object login "+userObject);
       return this.http.post(environment.apiUrl+'/login',userObject);
  }
}
