import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   year:any;
   domain:any;
   fb:any;
   insta:any;
   twitter:any;
   github:any;
   linkedin:any;
   medium:any;

  constructor() { }

  ngOnInit() {
    var d = new Date();
    this.year =  d.getFullYear();
    this.domain = environment.domainName;
    this.fb = environment.fb;
    this.insta = environment.insta;
    this.twitter = environment.twitter;
    this.github = environment.github;
    this.linkedin = environment.linkedin;
    this.medium = environment.medium;
  }

}
