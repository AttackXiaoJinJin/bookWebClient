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
  tabs = ['个人资料','喜欢书籍', '关注话题', '收藏文章','我的文章','我的订单','@ 我 的'];
  // tabs = ['个人资料','喜欢书籍', '关注话题', '收藏文章','我的订单'];
  tab_index:any;
  _user:any;
  _books:any;
  _topics:any;
  _articles:any;
  _orders:any;
  _myarticles:any;
  _recomments:any;
  img_url:any;
  userId:any;
  constructor(
    private userSer: UsersService,
    private router:Router,
    private route:ActivatedRoute,
    private OrdersService: OrdersService,
    private  glo:GlobalPropertyService,
  ) { }

  ngOnInit() {
    //隐藏导航栏
    this.glo.hiddenNavs = true;
    //用户未登录
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    //置顶
    window.scrollTo(0,0);
    //定位标签
    this.tab_index = this.route.snapshot.paramMap.get('tab_index');
    //获取user_id
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that=this;
    that.userId=sessionStorage.getItem('user_id');
    //更多信息
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
      // console.log(that._user);
    });
    //喜欢书籍列表
    that.userSer.getUserBooks(user_id, function (result) {
      if(!result.statusCode) {
        that._books = result[0];
      }
      // console.log(that._books);
    });
    //关注话题列表
    that.userSer.getUserTopics(user_id, function (result) {
      if(!result.statusCode) {
        that._topics = result[0];
      }
      // console.log(that._topics);
    });
    //收藏文章列表
    that.userSer.getUserArticles(user_id, function (result) {
      if(!result.statusCode) {
        that._articles = result[0];
      }
      // console.log(that._articles);
    });
    //我发表的文章
    that.userSer.showuserput(user_id ,function (result) {
      if(!result.statusCode) {
        that._myarticles = result;
      }
    })
    //订单列表
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
  // delOrder(order_id){
  //   let str = '{"order_id":' + order_id + '}';
  //   let order = JSON.parse(str);
  //   let str2 = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
  //   let user_id = JSON.parse(str2);
  //   let that=this;
  //   that.OrdersService.delOrder(order, function (result) {
  //     // console.log(result.statusCode);
  //     if(result.statusCode==93) {
  //       that.OrdersService.showOrder(user_id, function (result) {
  //         if(!result.statusCode) {
  //           that._orders = result;
  //         }else{
  //           that._orders = [];
  //         }
  //       });
  //     }
  //   });
  // }

// (change)="onFileChanged($event.target.files)"
  onFileChanged(fileList: FileList) {
    //文件队列长度大于0,
    if (fileList.length > 0) {
      //选取队列的第一个文件
      let file: File = fileList[0];
      //创建一个formdata对象
      let formData: FormData = new FormData();
      //添加 name value filename
      formData.append('uploadFile', file, file.name);
      //添加name value null
      formData.append('user_id', sessionStorage.getItem('user_id'));
      // console.log(formData.get('uploadFile'));
      // console.log(formData.get('user_id'));
      //上传文件
      let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
      let user_id = JSON.parse(str);
      let that=this;
      //将formData传到数据库
      this.userSer.upLoad(formData, function (result) {
        if(result.statusCode==-1){
          that.userSer.getMoreById(user_id, function (result) {
            // console.log(result);
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
      // console.log("H.........");

      if(!result.statusCode) {
        that._topics = result[0];
      }else{
        that._topics = [];
      }
      // console.log(that._topics);
    });
  }
}
