import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import {BlogService} from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
token:any;
isLogin=true;
posts = [];
  constructor(private tokenService:TokenService,private blogService:BlogService,private router:Router) {
}

ngOnInit() {
    this.token = this.tokenService.getToken();
    // console.log("token "+this.token);
    this.allPosts();
    this.blogService.searchPost('php').subscribe(data=>{
      //  console.log("search result "+JSON.stringify(data));
    },err=>{
        console.log("Errror "+JSON.stringify(err));
    })
  }

allPosts(){
     this.blogService.getPosts().subscribe(data=>{
      // console.log("post data "+JSON.stringify(data['posts']));
      this.posts = data['posts'];
 },err=>{
   console.log("Error all posts "+JSON.stringify(err))
    if(err.error.token === null){
          this.tokenService.deleteToken();
          this.router.navigate(['']);
    }
 })

 }

}
