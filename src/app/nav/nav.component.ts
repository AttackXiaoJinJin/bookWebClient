import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UsersService]
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

  constructor(
    private userSer:UsersService,
    private router:Router,
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
    }else{
      this.isLogin = false;
    }

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
        window.location.href=window.location.href.substring(0,window.location.href.indexOf('search')+6)+""+this._search;
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

  //发表文章需判断是否登录
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

  ifLoginInit(){
    let that=this;
    if(that.isLogin){
      this.login_if="testpublish/0";
    }else {
      this.login_if="";
    }
  }






}
