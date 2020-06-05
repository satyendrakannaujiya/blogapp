import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  username = new FormControl('',[Validators.required]);
  isError=false;
  emailError='';

constructor(private authService:AuthService,private router:Router,private tokenService:TokenService) { 
        

}
  ngOnInit() {
  }





  signUp(){
    let userDetails = {
         "username":this.username.value,
         "email":this.email.value,
         "password":this.password.value
    }
    this.authService.signUp(userDetails).subscribe(data=>{
          console.log("date "+JSON.stringify(data));
          this.tokenService.setToken(data.token);
          this.router.navigate(['home']);
    },err=>{
        console.log("Error "+JSON.stringify(err));
        this.isError=true;
        this.emailError = err.error.message;
    })
 }

  getErrorMessage(){
    if(this.email.hasError('required')){
         return 'Please enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' :'';
  }

  getPasswordErrorMessage(){
      if(this.password.hasError('required')){
           return 'Password is required';
      }
     let status = this.password.status;
     if(status=='INVALID'){
      return 'Password should be of minimum 8 character'
     }
     else{
        return '';
     }
      
  }

  getErrorMessageUsername(){
    if(this.username.hasError('required')){
      return 'Please enter a value';
  }
  return '';
}





getIsEnable(){
  if(this.password.invalid == false && this.email.invalid == false && this.username.invalid == false){
       return false;
  }else{
       return true;
  }

}

}
