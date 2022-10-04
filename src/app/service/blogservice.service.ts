import { Injectable } from '@angular/core';
import {blog} from "../Model/blogHub";
import {blogs} from "../Model/blogList";

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  private blogs:blog[]
  constructor() {
    this.blogs=blogs
  }
  getBlogs(){
    return this.blogs;
  }


  addBlog(blog:blog){
    let id = this.blogs.length+1;
    blog.id=id;
    this.blogs.unshift(blog);
    console.log(this.blogs)
  }
}
