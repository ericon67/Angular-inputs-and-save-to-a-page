import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MyBlog1Component} from "./my-blog1/my-blog1.component";
import { BrowserModule } from '@angular/platform-browser';
import {BlogFormComponent} from "./blog-form/blog-form.component";
import {FormsModule} from "@angular/forms";


const routes: Routes=[
  {path:'list',component:MyBlog1Component},
  {path:'create',component:BlogFormComponent}
];

@NgModule({
  declarations: [MyBlog1Component,BlogFormComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, MyBlog1Component,BlogFormComponent]
})
export class AppRoutingModule { }
