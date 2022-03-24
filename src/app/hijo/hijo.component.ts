import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() childPosts: any = [];
  @Output() passedEvent = new EventEmitter();

  data: any = '';

  constructor(public FormsModule: FormsModule) {}

  ngOnInit(): void {}
  PassEvent() {
    this.passedEvent.emit(this.data);
  }
}
