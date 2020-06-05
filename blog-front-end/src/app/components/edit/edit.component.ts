import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BlogService} from '../../services/blog.service';
import { TokenService } from '../../services/token.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editorForm:FormGroup;
  editorContent:string;
  topics:any = [];
  blogObj = {};
  editorStyle = {
    height:'400px'
   
  };
  config:{
      
  }
  id;
  post:any;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private blogService:BlogService,private tokenService:TokenService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.getBlogById(this.id);

})
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
        // console.log("Date suss "+JSON.stringify(data));
        this.editorContent = this.editorForm.get('editor').value;
    }) 
  }

getBlogById(id){
    this.blogService.getPostById(id).subscribe(data=>{
        this.post = data['post'];
        console.log(JSON.stringify(this.post));
      
        this.editorForm.get('title').setValue(this.post.title);
        this.editorForm.get('description').setValue(this.post.description);
        this.editorForm.get('topics').setValue(this.post.topics);
        this.editorForm.get('editor').setValue(this.post.blog);
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
        this.blogService.updatePost(this.id,this.blogObj).subscribe(data=>{
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
