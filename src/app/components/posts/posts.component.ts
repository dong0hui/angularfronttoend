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
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;


  // Inject the PostService into the constructor
  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        // splice: remove 1 element at index
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }
}
