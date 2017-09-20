import {Component, Input, OnInit} from '@angular/core';
import {topics} from "../../datas/datas";

@Component({
  selector: 'app-topic-top',
  templateUrl: './topic-top.component.html',
  styleUrls: ['./topic-top.component.css']
})
export class TopicTopComponent implements OnInit {
  @Input() _topic:any;
  constructor() { }

  ngOnInit() {
    this._topic=topics.datas;
  }

}
