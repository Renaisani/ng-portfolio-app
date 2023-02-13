import { Component } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Blog } from './models/blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestNETCoreApp.UI';
  blog: Blog[] = [];
  entryToEdit?: Blog;

  constructor(private blogService: BlogService) {}

  ngOnInit() : void {
    this.blogService
      .getBlogs()
      .subscribe((result: Blog[]) => (this.blog = result)); 
    
  }

  updateFeedbackList(blog: Blog[]) {
    this.blog = blog;
  }

  initNewFeedback() {
    this.entryToEdit = new Blog();
  }

  editEntry(entry: Blog) {
    this.entryToEdit = entry;
  }
}
