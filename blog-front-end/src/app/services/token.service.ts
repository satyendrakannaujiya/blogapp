import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isloggedin : boolean;
  constructor(private cookieService:CookieService) { 
        this.isloggedin=false;
  }

  

  setToken(token){
        this.cookieService.set('blog_token',token);
        this.isloggedin=true;
  }

  getToken(){
    if(this.cookieService.get('blog_token')){
      this.isloggedin=true;
    }
      return this.cookieService.get('blog_token');
  }
  deleteToken(){
      this.cookieService.delete('blog_token');
      
      this.isloggedin=false;
  }

  getPayload(){
       let token = this.cookieService.get('blog_token');
        let payload;
       if(token){
           payload = token.split('.')[1];
           payload = JSON.parse(window.atob(payload));
           
       }

       return payload.data;
  }



}
