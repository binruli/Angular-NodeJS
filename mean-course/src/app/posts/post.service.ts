import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostsService {
  private posts: Post [] = [];
  private postsUpdated = new Subject<Post[]>()
  getPosts() {
    return [...this.posts];//pull them out of the array and add them to this new array.not affect original array.
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title:string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
