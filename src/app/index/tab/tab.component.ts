import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  tabs=['书籍推荐','文章推荐'];
  tab_index=0;
  constructor() { }

  ngOnInit() {
  }

}
