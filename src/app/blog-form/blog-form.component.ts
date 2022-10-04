import { Component, OnInit } from '@angular/core';
import {BlogserviceService} from "../service/blogservice.service";

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  categories = ['technical','personal','nature'];

  constructor(private service:BlogserviceService) { }

  ngOnInit(): void {
  }
  insert(blog1: any){
    //alert(blog.title)
    console.log('inserting....')
    this.service.addBlog(blog1)
  }

}
