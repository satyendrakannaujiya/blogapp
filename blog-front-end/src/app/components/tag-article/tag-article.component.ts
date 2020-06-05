import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import * as Countable from 'countable';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tag-article',
  templateUrl: './tag-article.component.html',
  styleUrls: ['./tag-article.component.css']
})
export class TagArticleComponent implements OnInit {

  tag:any;
  
   posts = [];
  constructor(private router:Router,private route:ActivatedRoute,private blogService:BlogService,private tokenService:TokenService) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
          this.tag=params['tag'];
          this.getBlogById(this.tag);
    })
   
  }

  getBlogById(tag){
      this.blogService.getPostByTag(tag).subscribe(data=>{
       
          this.posts = data['posts'];
      },err=>{
           console.log("Some error occured in tag api "+JSON.stringify(err));
      })
  }


}
