import { Component, OnInit , AfterViewChecked, ChangeDetectorRef,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import {BlogService} from './services/blog.service';
import { HostListener } from "@angular/core";
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit,AfterViewChecked{
  title = 'blog-front-end';
  isloggedin = false;
  topics:any = [];
  topic_length=0;
  limit = 10;
  screenHeight: number;
  screenWidth: number;
  production:boolean;
  text:any;
  constructor(private blogService:BlogService,private router:Router,private tokenService:TokenService,private cdRef : ChangeDetectorRef){
    this.getScreenSize();
  }

ngOnInit(){
  this.production=environment.production;
  this.blogService.getTopics().subscribe(data=>{
      this.topics = data['topic_list'];
      this.topic_length = this.topics.length;
    },err=>{
      console.log("Some error occured while fetching topics list ");
  })

  this.triggerSearch();
    
}
ngAfterViewChecked(){
   let isloggedin = this.tokenService.isloggedin;
   if(isloggedin != this.isloggedin){
       this.isloggedin = isloggedin;
       this.cdRef.detectChanges();
   }
}

@HostListener('window:resize', ['$event'])
getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      if(this.screenWidth<=600){
          this.limit=2;
      }
      else if(this.screenWidth>600 && this.screenWidth<=1100){
        this.limit=5;
      }
      // console.log("sceerrn with "+this.screenWidth);
      // console.log(this.screenHeight, this.screenWidth);
}


showArticle(tag){
  this.blogService.getPostByTag(tag).subscribe(data=>{
      console.log("Reponse "+JSON.stringify(data));
  },err=>{
       console.log("Error occures "+JSON.stringify(err));
  });
}

triggerSearch(){
  var input = document.getElementById("search");
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-icon").click();
    }
  });

}



  logout(){
      this.tokenService.deleteToken();
      this.router.navigate(['home']);
  }

  
}
