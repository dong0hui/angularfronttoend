import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() newPostEvent: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost!: Post;

  constructor(private postService: PostService) { }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        console.log(post);
        // similar to click, keydown events, etc. we have customized event
        // all other components that are listening to this event will be notified
        this.newPostEvent.emit(post); 
      });
    }
  }

}
