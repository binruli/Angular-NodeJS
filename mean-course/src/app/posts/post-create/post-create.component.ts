//.ts=>we use typescript
// dash seperated words for describing which kind of component
//class is typescript feature, allows us creat blueprint for an object though we will never creat that component object on our own.
//angular will instanitiate it and creat it and use it.

import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
//not for long html code. link the html url
//selector which is allows us use that component. as our own html tag
//<textarea rows="8" [value]="newPost" #postInput></textarea> other way
export class PostCreateComponent{
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost() {
    alert('Post added!');
    this.newPost = this.enteredValue;
  }
}
