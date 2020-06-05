import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthGuard} from './services/auth.guard';
import { WriteArticleComponent } from './components/write-article/write-article.component';
import {FullArticleComponent} from './components/full-article/full-article.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { EditComponent } from './components/edit/edit.component';
import { TagArticleComponent } from './components/tag-article/tag-article.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'create',component:WriteArticleComponent,
   canActivate: [AuthGuard]
    },
    {path:'blog/:id',component:FullArticleComponent},
    {path:'blog/tag/:tag',component:TagArticleComponent},
    {path:'blog/search/:text',component:SearchBlogComponent},
    {path:'blog-list',component:BlogListComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
   {path:'',component:HomeComponent},
   {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
