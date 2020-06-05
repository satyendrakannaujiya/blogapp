import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogMaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import {TimeAgoPipe} from 'time-ago-pipe';



// components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WriteArticleComponent } from './components/write-article/write-article.component';


// services

import {UsersService} from './services/users.service';
import {AuthService} from './services/auth.service';
import {TokenService} from './services/token.service';
import {BlogService} from './services/blog.service';
import {CookieService} from 'ngx-cookie-service';
import { TokenInterceptor } from './services/token-interceptor';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { TagArticleComponent } from './components/tag-article/tag-article.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    WriteArticleComponent,
    FullArticleComponent,
    TimeAgoPipe,
    BlogListComponent,
    EditComponent,
    FooterComponent,
    TagArticleComponent,
    SearchBlogComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [UsersService,AuthService,TokenService,CookieService,BlogService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
