import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = "Blog";

  constructor(private http: HttpClient) { }

  public getBlogs() : Observable<Blog[]> {

    return this.http.get<Blog[]>(`${environment.apiUrl}/${this.url}`);
  }

  public createBlog(entry: Blog) : Observable<Blog[]> {

    return this.http.post<Blog[]>(`${environment.apiUrl}/${this.url}`, entry);
  }

  public updateBlog(entry: Blog) : Observable<Blog[]> {

    return this.http.put<Blog[]>(`${environment.apiUrl}/${this.url}`, entry);
  }

  public deleteBlog(entry: Blog) : Observable<Blog[]> {

    return this.http.delete<Blog[]>(`${environment.apiUrl}/${this.url}/${entry.id}`);
  }
}
