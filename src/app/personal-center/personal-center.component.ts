import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [UsersService]
})
export class PersonalCenterComponent implements OnInit {
  tabs = ['喜欢书籍', '订单', '收货地址', '关注话题', '收藏文章', '消息'];
  tab_index = 0;
  _user:any;
  _books:any;
  _topics:any;
  _articles:any;
  constructor(
    private userSer: UsersService,
    private router:Router,
  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that=this;
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
      // console.log(that._user);
    });
    that.userSer.getUserBooks(user_id, function (result) {
      if(!result.statusCode) {
        that._books = result[0];
      }
      // console.log(that._books);
    });
    that.userSer.getUserTopics(user_id, function (result) {
      if(!result.statusCode) {
        that._topics = result[0];
      }
      // console.log(that._topics);
    });
    that.userSer.getUserArticles(user_id, function (result) {
      if(!result.statusCode) {
        that._articles = result[0];
      }
      // console.log(that._articles);
    });
  }
}
