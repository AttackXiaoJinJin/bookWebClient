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
   _pagesize: number = 6;
   _pages: number;
   _Marticle:any;
   _Mattent:any;
   tabs = ['推荐','热门'];
  tab_index = 0;
   constructor(
    private tp: TopicService) { }

  ngOnInit() {
    let that = this;


    that.tp.getMarticletopic(function (result) {
      that._Marticle = result[0];
      that._pages = Math.ceil( that._Marticle.length / that._pagesize);
    })
    that.tp.getMattentopic(function (result) {
      that._Mattent=result[0];
      that._pages = Math.ceil( that._Mattent.length / that._pagesize);
    })


  }

}
