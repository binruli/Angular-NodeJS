import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostsService {
  private posts: Post [] = [];
  private postsUpdated = new Subject<Post[]>();

  //allows angular to find out what we want as an argument here and the type is the http client we just imported.
  constructor(private http: HttpClient) {}

  //<>object
  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData)=>{
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
    //return [...this.posts];//pull them out of the array and add them to this new array.not affect original array.
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title:string, content: string) {
    const post: Post = { id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts',post)
      .subscribe((responseDate)=>{
        console.log(responseDate.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
