import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {
  tabs = ['文章',  '最新评论','热门'];
  tab_index = 0;

  constructor() { }

  ngOnInit() {
  }

}
