import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  @Output() passedEvent = new EventEmitter();
  post = '';
  parentPosts: any = [];
  data: any = '';
  constructor(public FormsModule: FormsModule) {}
  ngOnInit(): void {}

  AddPost(post: any) {
    console.log(this.post);
    this.parentPosts.push(post);
  }

  PassEvent() {
    this.passedEvent.emit(this.data);
  }
}
