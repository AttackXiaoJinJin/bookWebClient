import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {TopicService} from  "../services/topic.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css'],
  providers: [TopicService]
})
export class TopicdetailComponent implements OnInit {
  fuuserid:any;
  _articles: any;
  _Collectarticles: any;
  _Newarticles: any;
  full_height:any;
  scroll_top:any;
  //模态框,未登录提示登录
  modal_if: boolean=false;
  isLogin:boolean=false;


  tabs = ['热门', '推荐', '最新发布'];
  tab_index = 0;
  constructor(
    private route: ActivatedRoute,
    private  article: TopicService,
    private router:Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('topic_id');
    const str = '{"topic_id" : ' + id + '}';
    const article = JSON.parse(str);
    const that = this;
    that.article.getHotArticleById(article , function (result) {
      that._articles = result[0];
    });
    that.article.getCollectAritcleByld(article, function (result) {
      that._Collectarticles = result[0];
    });
      that.article.getNewAritcleByld(article , function (result) {
        that._Newarticles = result[0];
      });

      //判断用户是否登录
    if(sessionStorage.getItem('user_id')){
      this.fuuserid=sessionStorage.getItem('user_id');
    }


  }
  //=================init


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
    that.scroll_top = window.scrollY*1.1+"px";
    that.full_height=document.body.offsetHeight +"px";
    //弹出模态框
    that.modal_if =true;
  }

  getData(event){
    let that=this;
    that.isLogin=event;
    if(that.isLogin==true){
      this.unlogin(that);
    }
  }



}
