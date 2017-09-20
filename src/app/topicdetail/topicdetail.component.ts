import { Component, OnInit } from '@angular/core';
import {articles} from "../datas/datas";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {
  _articles: any;
  constructor() { }

  ngOnInit() {
    this._articles = articles.data;
  }

}
