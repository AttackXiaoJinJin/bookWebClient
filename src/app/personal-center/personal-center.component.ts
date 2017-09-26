import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from './../services/users.service';
import { OrdersService } from './../services/orders.service';
import { GlobalPropertyService } from './../services/global-property.service';
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
    private  glo:GlobalPropertyService,
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs = true;
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
    that.OrdersService.showOrder(user_id, function (result) {
      if(!result.statusCode) {
        that._orders = result;
      }
      // console.log(that._orders);
    });
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
  toIndex() {
    this.router.navigate(['/index']);
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
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('user_id', sessionStorage.getItem('user_id'));
      // console.log(formData.get('uploadFile'));
      // console.log(formData.get('user_id'));
      //上传文件
      let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
      let user_id = JSON.parse(str);
      let that=this;
      this.userSer.upLoad(formData, function (result) {
        if(result.statusCode==-1){
          that.userSer.getMoreById(user_id, function (result) {
            console.log(result);
            if(!result.statusCode) {
              that._user = result[0];
            }
            // console.log(that._user);
          });
        }
      });
    }
  }
  delattent(){
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that=this;
    that.userSer.getUserTopics(user_id, function (result) {
      if(!result.statusCode) {
        that._topics = result[0];
      }
      // console.log(that._topics);
    });
  }
}
