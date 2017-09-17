import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Input() _topic:any;
  constructor() { }

  ngOnInit() {
  }
  todetail(){

  }
}
