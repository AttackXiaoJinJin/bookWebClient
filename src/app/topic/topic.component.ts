import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TopicService} from "../services/topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers:[TopicService],

})
export class TopicComponent implements OnInit {
  fuuserid:any;
  full_height:any;
  scroll_top:any;
  //模态框,未登录提示登录
  modal_if: boolean=false;
  isLogin:boolean=false;

  _topics: any;
  _pagesize: number = 6;
  _pages: number;
  _Marticle: any;
  _Mattent: any;
  tabs = ['推荐', '热门'];
  tab_index = 0;

  constructor(
    private router:Router,
    private tp: TopicService,
  ) { }

  ngOnInit() {
    //判断用户是否登录
    if(sessionStorage.getItem('user_id')){
      this.fuuserid=sessionStorage.getItem('user_id');
    }
    let that = this;
    that.tp.getMarticletopic(function (result) {
      that._Marticle = result[0];
      that._pages = Math.ceil(that._Marticle.length / that._pagesize);
    });
    that.tp.getMattentopic(function (result) {
      that._Mattent = result[0];
      that._pages = Math.ceil(that._Mattent.length / that._pagesize);
    });
  }
//  ================init

  //去登录界面
  toLogin(){
    this.router.navigate(['/login']);
  }
  // 关闭模态框
  close(){
    this.modal_if = false;
  }
  //封装未登录的操作
  unlogin(that){
    console.log("用户未登录！！！！！！！！！！");
    //让模态框显示在用户的该位置
    // that.scroll_top = window.scrollY*1.1+"px";
    that.scroll_top = document.body.scrollHeight/3+"px";
    that.full_height=document.body.offsetHeight +"px";
    //弹出模态框
    that.modal_if =true;
  }

  getData(event){
    let that=this;
    that.isLogin=event;
    console.log(that.isLogin+"这是是否登录");
    if(that.isLogin==true){
      this.unlogin(that);
    }
  }
  changeTab_index(index){
    this.tab_index=index;
    let that = this;
    if(this.tab_index==0){
      that.tp.getMarticletopic(function (result) {
        that._Marticle = result[0];
        that._pages = Math.ceil(that._Marticle.length / that._pagesize);
      });
    }else{
      that.tp.getMattentopic(function (result) {
        that._Mattent = result[0];
        that._pages = Math.ceil(that._Mattent.length / that._pagesize);
      });
    }
  }
}
