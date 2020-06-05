import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import * as Countable from 'countable';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {

  text:any;
  
  posts = [];
 constructor(private router:Router,private route:ActivatedRoute,private blogService:BlogService,private tokenService:TokenService) { }

 ngOnInit() {

  this.route.params.subscribe(params=>{
        this.text=params['text'];
        this.getBlogById(this.text);
  })
 
}

getBlogById(text){
    this.blogService.searchPost(text).subscribe(data=>{
      // console.log("Data for search "+JSON.stringify(data) );
        this.posts = data['posts'];
    },err=>{
      console.log("Some error occured in search api "+JSON.stringify(err));
    })
}


}
