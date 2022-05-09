import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'mean-course';
  storedPosts = [];
  onPostAdded(post){
    this.storedPosts.push(post);
  }
}

//$event: gives you access to that data you emited, same for click events or any built-in events
