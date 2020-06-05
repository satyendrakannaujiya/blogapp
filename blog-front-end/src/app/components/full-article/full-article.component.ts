import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import * as Countable from 'countable';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
   id:any;
   post:any;
   posts = [];
  constructor(private router:Router,private route:ActivatedRoute,private blogService:BlogService,private tokenService:TokenService) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
          this.id=params['id'];
          this.getBlogById(this.id);
    })
    this.allPosts(this.id,0);
  }

  getBlogById(id){
      this.blogService.getPostById(id).subscribe(data=>{
          this.post = data['post'];
      })
  }

  allPosts(id,type){
    this.blogService.getPosts().subscribe(data=>{
     // console.log("post data "+JSON.stringify(data['posts']));
     this.posts = data['posts'];
     this.posts.forEach((item,index)=>{
      // console.log("Matched "+JSON.stringify(item));
           if(item._id == id){
            this.posts.splice(index, 1);
           }
     })

     if(type==1){
      this.router.navigateByUrl(`/blog/${id}`);
     }
},err=>{
  console.log("Error all posts "+JSON.stringify(err))
   if(err.error.token === null){
         this.tokenService.deleteToken();
         this.router.navigate(['']);
   }
})

}

showArticle(id){
  console.log("Show clicked "+id);
  this.allPosts(id,1);
    // this.router.navigate([`/blog/${id}`]);
    
}

}
