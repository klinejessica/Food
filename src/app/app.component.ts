import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Your Food Guide';
 txtArea ='Default Value';
 chkBox ='Default Value';
 sctOption ='Default Value';
 posts: any = null;

 constructor() {
  //  this.apiPosts.getPosts().subscribe(data => this.posts = data);
  //  this.apiPosts.addPosts().subscribe(post => this.posts.push(post));
 }
 visibleSidebar1;
}
