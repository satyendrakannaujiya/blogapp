import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import {BlogService} from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  token:any;
  isLogin=true;
  posts = [];
  constructor(private tokenService:TokenService,private blogService:BlogService,private router:Router) { }

  ngOnInit() {
    this.token = this.tokenService.getToken();
  
    this.allPosts();
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

deleteBlog(id){
  if(confirm("Are you sure to delete the docs ")){
    this.blogService.deleteBlog(id).subscribe(data=>{
      console.log("Post has been deleted successfully "+JSON.stringify(data));
      this.allPosts();
 },err=>{
       console.log("Some error occure while deleting post "+JSON.stringify(err));
 })
}
else{
  console.log("Cancel is clicked !!");
}
    
}

}
