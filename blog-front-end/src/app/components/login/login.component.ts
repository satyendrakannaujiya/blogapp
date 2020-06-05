import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required]);
  isEnable=false;
  isError=false;
  error_message='';

  constructor(private authService:AuthService,private router:Router,private tokenService:TokenService) { }

  ngOnInit() {
      
  }


  login(){
    let userObject = {
      "email":this.email.value,
      "password":this.password.value
    }
    this.authService.login(userObject).subscribe(data=>{
      console.log("Data token "+data.token);
      this.tokenService.setToken(data.token);
          this.router.navigate(['home']);
    },err=>{
        console.log("Error occured in login "+JSON.stringify(err));
        this.isError=true;
        this.error_message=err.error.message;
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
    
    return '';
      
  }

  getIsEnable(){
        if(this.password.invalid == false && this.email.invalid == false){
             return false;
        }else{
             return true;
        }

  }
  

}
