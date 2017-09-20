import { Component, OnInit } from '@angular/core';
import {topics} from "../../datas/datas";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  _topics: any;
  constructor() { }

  ngOnInit() {
    this._topics = topics.datas;
  }

}
