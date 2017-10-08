import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
import {RecommentsService} from "../services/recomments.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UsersService,RecommentsService]
})
export class NavComponent implements OnInit {
  user:any;
  _search:any;
  isLogin:boolean = false;
  //模态框,未登录提示登录
  modal_if: boolean=false;
  full_height:any;
  scroll_top:any;
  login_if:any="";
  //==书的回复数
  bknum:any=0;
  bknn:any;
  //==文章的回复数
  artnum:any=0;
  //=====总回复数
  allnum:any=0;
  //======是否显示
  if_shownum:boolean=false;
  innernum:any="innernum hide";
  newnum:any="newnum hide";

  constructor(
    private userSer:UsersService,
    private router:Router,
    private recommentSer:RecommentsService,
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem('user_id')){
      let str = '{"user_id":'+ sessionStorage.getItem('user_id') +'}';
      let user_id = JSON.parse(str);
      let that=this;
      that.userSer.getBaseById(user_id,function (result) {
        // console.log(result);
        if(result.statusCode) {
          that.router.navigate(['/**']);
        }else{
          that.user = result[0];
        }
      });
      this.isLogin = true;
      //====获取书评论数
      this.getbknum();
      //====文章回复数
     this.getartnum();
      //this.allnum=(this.artnum)+(this.bknum);
      // this.getallnum();
      // this.allnum=this.getbknum+this.getartnum;



    }else{
      this.isLogin = false;
    }

    //初始换界面时获取topic_id
    this.ifLoginInit();

  }
  //==============================================上面是init

  //去登录界面
  toLogin(){
    this.router.navigate(['/login']);
  }

  // 关闭模态框
  close(){
    this.modal_if = false;
  }

  remove(){
    sessionStorage.removeItem('user_id');
    this.router.navigate(['/index']);
    this.isLogin = false;
  }
  toSearch(){
    if(this._search){
      if(window.location.href.indexOf('search')!=-1){
        window.location.href=window.location.href.substring(0,window.location.href.indexOf('search')+6)+"/"+this._search;
        // console.log(window.location.href.substring(0,window.location.href.indexOf('search')+6));
      }else{
        this.router.navigate(['/search',this._search]);
        this._search="";
      }
    }
  }

  //封装未登录的操作
  unlogin(that){
    console.log("用户未登录！！！！！！！！！！");
    //让模态框显示在用户的该位置
    that.scroll_top = window.scrollY*1.1+"px";
    that.full_height=document.body.offsetHeight +"px";
    //弹出模态框
    that.modal_if =true;
  }

  //发表文章需判断是否登录,并获取topic_id
  ifLoginClick(){
    let that=this;
    console.log("判断是否登录");
    if(that.isLogin){
      this.login_if="testpublish/0";
    }else {
      this.login_if="";
      this.unlogin(that);
    }


  }

  //初始换界面时获取topic_id
  ifLoginInit(){
    let that=this;
    if(that.isLogin){
      this.login_if="testpublish/0";
    }else {
      this.login_if="";
    }
  }

  //登录时获取通知数,书
  getbknum(){
    let that=this;
    if(that.isLogin){
      let userId=sessionStorage.getItem('user_id');
      that.recommentSer.userbknum(userId+'',function (result) {
        if(result.statusCode&&result.statusCode==123){
         that.bknum=0;
        }else{
         that.bknum=result.newnum;
        }
      })
    }
  }

  //登录时获取通知数,文章
  getartnum(){
    let that=this;
    if(that.isLogin){
      let userId=sessionStorage.getItem('user_id');
      that.recommentSer.userartnum(userId+'',function (result) {
        if(result.statusCode&&result.statusCode==123){
         that.artnum=0;
        }else{
         that.artnum=result.newnum;
        }
      })
    }
  }

  // getallnum(){
  //   let that=this;
  //     that.allnum=that.bknum+that.artnum;
  //     if(this.allnum==0){
  //       that.newnum="newnum hide";
  //       that.innernum="innernum hide";
  //     }else if(this.allnum>99){
  //       this.allnum='99+';
  //       that.newnum="newnum";
  //       that.innernum="innernum";
  //     }else{
  //       that.newnum="newnum";
  //       that.innernum="innernum";
  //     }
  //   }

  updatenum(){
    let that=this;
    let userId=sessionStorage.getItem('user_id');
    that.userSer.updatebk(userId+'',function (result) {
     // if(result.statusCode&&result.statusCode==126){
     //   that.artnum=0;
     // }else{
     //      that.artnum=result.newnum;
     //    }
    });
    that.userSer.updateart(userId+'',function (result) {
    })

  }


}
