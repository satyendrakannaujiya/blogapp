import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

     constructor(private tokenService: TokenService){
      
        
     }
intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // return next.handle(req);
    // console.log("Header interceptor called ");
    const headersConfig = {
        'Content-Type':'application/json',
        'Accept':'application/json',

       }

       const token = this.tokenService.getToken();
       if(token){
        //    console.log(token+" set token is ");
           headersConfig['Authorization']=`beader ${token}`;
       }
       const _req = req.clone({setHeaders: headersConfig});
       return next.handle(_req);
  }
    
}
