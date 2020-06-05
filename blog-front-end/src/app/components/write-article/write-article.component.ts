import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BlogService} from '../../services/blog.service';
import { TokenService } from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})
export class WriteArticleComponent implements OnInit {
  editorForm:FormGroup;
  editorContent:string;
  topics:any = [];
  blogObj = {};
  editorStyle = {
    height:'400px'
   
  };
  constructor(private router:Router,private blogService:BlogService,private tokenService:TokenService) { 
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
        'editor':new FormControl(null),
        'title':new FormControl(null),
        'description':new FormControl(null),
        'topics':new FormControl(null)
    })

    this.blogService.getTopics().subscribe(data=>{
          this.topics = data['topic_list'];
    },err=>{
        console.log("Some error occured while fetching topics list ");
    })
    this.editorForm.valueChanges.subscribe(data=>{
        console.log("Date suss "+JSON.stringify(data));
        this.editorContent = this.editorForm.get('editor').value;
    })
   
}
  onPublish(){
      if(confirm("Are you sure publish article!")){
        this.blogObj = {
            title :this.editorForm.get('title').value,
            description: this.editorForm.get('description').value,
            topics: this.editorForm.get('topics').value,
            blog: this.editorForm.get('editor').value,
            posted_by : this.tokenService.getPayload().username

        }

if(this.blogObj['title'] && this.blogObj['description'] && this.blogObj['topics'] && this.blogObj['blog']
        && this.blogObj['posted_by'] ){
          this.blogService.create(this.blogObj).subscribe(data=>{
            console.log("reponse from backend "+JSON.stringify(data));
            this.router.navigate(['home']);
        },err=>{
            console.log("Some error occured "+JSON.stringify(err));
        });
      }
      else{
          alert("Please enter all mandatory fileld ");
      }
  }
    else{
      console.log("Cancel is clicked !! ");
    }
  }

}
