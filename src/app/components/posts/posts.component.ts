import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  posts: Post[] = [];


  // Inject the PostService into the constructor
  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
