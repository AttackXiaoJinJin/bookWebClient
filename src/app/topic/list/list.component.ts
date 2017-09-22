import { Component, OnInit } from '@angular/core';
import {TopicService } from "../../services/topic.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[TopicService]
})
export class ListComponent implements OnInit {
  _topics: any;
  _pagesize: number = 3;
  _pages: number;
  constructor(
    private tp: TopicService) { }

  ngOnInit() {
    let that = this;
    that.tp.getAllTopic(function (result) {
      that._topics = result[0];
      // that._pages = Math.ceil(that._topics.length / this._pagesize);
      // console.log(that._pages);
    })
  }

}
