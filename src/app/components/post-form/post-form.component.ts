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
  @Input() isEdit!: boolean;
  @Output() updatedPostEvent: EventEmitter<Post> = new EventEmitter();

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

  updatePost() {
    //currentPost is 2-way binding. No matter what you change in post-form template, it will be reflected in post-form model here. this.currentPost is always whatever you type in the form
    this.postService.updatePost(this.currentPost).subscribe( hui => {
      console.log(hui);
      this.isEdit = false;
      this.updatedPostEvent.emit(hui);
    });
  }
}
