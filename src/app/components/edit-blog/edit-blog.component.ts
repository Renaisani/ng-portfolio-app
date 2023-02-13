import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  @Input() blog?: Blog;
  @Output() blogUpdated = new EventEmitter<Blog[]>();

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    
  }

  addFeedback(blog:Blog) {
    this.blogService.createBlog(blog).subscribe((entries: Blog[]) => this.blogUpdated.emit(entries));
    this.blog = undefined;
  }

  editFeedback(blog:Blog) {
    this.blogService.updateBlog(blog).subscribe((entries: Blog[]) => this.blogUpdated.emit(entries));
    this.blog = undefined;
    
  }

  deleteFeedback(blog:Blog) {
    this.blogService.deleteBlog(blog).subscribe((entries: Blog[]) => this.blogUpdated.emit(entries));
    this.blog = undefined;
  }

  cancelEdit() {
    this.blog = undefined;
  }

}
