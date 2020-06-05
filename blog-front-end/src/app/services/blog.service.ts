import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {  HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  create(blogObject):Observable<any>{
    return this.http.post(environment.apiUrl+'/create',blogObject);
  }

  getTopics(){
      return this.http.get(environment.apiUrl+'/create/topics');
  }

  getPosts(){
    console.log("Get post blog service ");
      return this.http.get(environment.apiUrl+'/posts');
  }
  getPostById(id){
      return this.http.get(environment.apiUrl+'/posts/'+id);
  }
  getPostByTag(tag){
    return this.http.get(environment.apiUrl+'/tags/'+tag);
  }

  searchPost(text){
    return this.http.get(environment.apiUrl+'/search/'+text);
  }

  deleteBlog(id){
   return this.http.delete(environment.apiUrl+'/posts/'+id);
  }
  updatePost(id,blogObj){
    return this.http.put(environment.apiUrl+'/posts/'+id,blogObj);
  }

  sendContact(details){
     return this.http.post(environment.apiUrl+'/contact',details);
  }


}
