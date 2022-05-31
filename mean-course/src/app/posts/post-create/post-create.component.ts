//.ts=>we use typescript
// dash seperated words for describing which kind of component
//class is typescript feature, allows us creat blueprint for an object though we will never creat that component object on our own.
//angular will instanitiate it and creat it and use it.

import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../post.service";
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
//not for long html code. link the html url
//selector which is allows us use that component. as our own html tag
//<textarea rows="8" [value]="newPost" #postInput></textarea> other way
export class PostCreateComponent{
  enteredTitle = '';
  enteredContent = '';

  //newPost = 'NO CONTENT';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid){
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
    //alert('Post added!');
    //this.newPost = this.enteredValue;
  }
}
//matInput: turn into a material input field
//ngModel: creates a formControl instance from a domain model and binds it to a form control element.
//Output: turns into an event to which you can list to from the outside(means in the parent component)
