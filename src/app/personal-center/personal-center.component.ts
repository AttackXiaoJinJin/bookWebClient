import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from './../services/users.service';
import { OrdersService } from './../services/orders.service';
@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [ UsersService,OrdersService ]
})
export class PersonalCenterComponent implements OnInit {
  tabs = ['个人资料','喜欢书籍', '关注话题', '收藏文章','我的订单'];
  tab_index:any;
  _user:any;
  _books:any;
  _topics:any;
  _articles:any;
  _orders:any;
  img_url:any;
  constructor(
    private userSer: UsersService,
    private router:Router,
    private route:ActivatedRoute,
    private OrdersService: OrdersService,

  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0,0);
    this.tab_index = this.route.snapshot.paramMap.get('tab_index');
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
      // console.log(result.statusCode);
      if(!result.statusCode) { //如果没找到就返回一个状态码
        that._topics = result[0];
      }
      console.log(that._topics);
    });
    that.userSer.getUserArticles(user_id, function (result) {
      if(!result.statusCode) {
        that._articles = result[0];
      }
      // console.log(that._articles);
    });
    that.OrdersService.showOrder(user_id, function (result) {
      if(!result.statusCode) {
        that._orders = result;
      }
      // console.log(that._orders);
    });
  }
  delOrder(order_id){
    let str = '{"order_id":' + order_id + '}';
    let order = JSON.parse(str);
    let str2 = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str2);
    let that=this;
    that.OrdersService.delOrder(order, function (result) {
      // console.log(result.statusCode);
      if(result.statusCode==93) {
        that.OrdersService.showOrder(user_id, function (result) {
          if(!result.statusCode) {
            that._orders = result;
          }
          // console.log(that._addresses);
        });
      }
    });
  }
  onFileChanged(fileList: FileList) {
    //图片预览
    let img=new Image();
    this.img_url=window.URL.createObjectURL(fileList[0]);
    // var $img=$(img);
    img.onload=function () {
      // $("#preview").empty().append($img);
      //释放所占用的内容
      window.URL.revokeObjectURL(img.src);
    };
    console.log(this.img_url);

    //上传文件
    this.userSer.upLoad(fileList, function (result) {
      console.log(result);
    });
  }
}
