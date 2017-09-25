import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.css']
})
export class SearchTopicComponent implements OnInit {
  _Marticle:any;
  constructor() { }

  ngOnInit() {
  }
  mostarticle(str){
      this._Marticle=str;
  }
}
