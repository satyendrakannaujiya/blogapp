import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  details:any;
  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null),
      'message':new FormControl(null)
    })

 }

 submit(){
  this.details = {
    name :this.contactForm.get('name').value,
    email: this.contactForm.get('email').value,
    message: this.contactForm.get('message').value
  }
  
  this.blogService.sendContact(this.details).subscribe(data=>{
       console.log("Contact is saved "+JSON.stringify(data));
  },err=>{
      console.log("Some error occured "+JSON.stringify(err));
  })
  this.router.navigate(['home']); 
   console.log(this.details);
 }

}
