import { Component, OnInit } from '@angular/core';
import {blog} from "../Model/blogHub";
import {blogs} from "../Model/blogList";
import {BlogserviceService} from "../service/blogservice.service";

@Component({
  selector: 'app-my-blog1',
  templateUrl: './my-blog1.component.html',
  styleUrls: ['./my-blog1.component.css']
})
export class MyBlog1Component implements OnInit {
  blogs:blog[]
  constructor(private service:BlogserviceService) { this.blogs=blogs}

  ngOnInit(): void {
    //this.blogs = blogs
    this.blogs=this.service.getBlogs();
  }

}
