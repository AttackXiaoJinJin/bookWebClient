import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
  tabs=['喜欢书籍', '订单', '收货地址','关注话题','收藏文章','消息'];
  tab_index=0;
  constructor() { }

  ngOnInit() {
  }

}
