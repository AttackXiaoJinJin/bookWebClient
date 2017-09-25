import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css'],
  providers:[ArticlesService,CommentsService]
})
export class ArticledetailComponent implements OnInit {
  article:any;
  artid: any;
  userid:any;
  comments: any;
  comment_if: boolean;
  //模态框,未登录提示登录
  modal_if: boolean=false;
  articlecomment: any;
  collect_if:any;
  scroll_top:any;
  full_height:any;
  className:any;
  collectName:any;
  collectNum;any;


  constructor(private artSer:ArticlesService,
              private route:ActivatedRoute,
              private router:Router,
              private CommentsService:CommentsService,
              ) { }

  ngOnInit() {
    //初始化界面时默认在顶端
    window.scrollTo(0,0);
    this.artid = this.route.snapshot.paramMap.get('article_id');
    let that=this;
    //从sessionStorage中获取用户id
    that.userid=sessionStorage.getItem('user_id');


    //====================下面获取文章
    that.artSer.getArticleDetail(that.artid+'',function (result) {
      //console.log(result[0][0]+"这是result00");
      if(result[0][0].statusCode){
        //console.log(result[0][0].statusCode+"这是statusCode");
        that.router.navigate(['/**']);
      }else {
        that.article=result[0][0];

      }
    });

    //===================获取评论
    that.CommentsService.getArticleComments(that.artid+'',function (result) {
      //console.log(JSON.stringify(result)+"这是文章评论");
      //如果返回错误状态码并且返回结果为null
      if (result.statusCode || !result.length) {
        //则没有评论
        that.comment_if=false;
      }else {
        that.comment_if=true;
        that.comments = result[0];
        console.log(JSON.stringify(result[0])+"这是文章======评论");
      }
    });

    //显示收藏数
    this.showCollectNum(that);
    //===============显示收藏
    this.showIfCollect(that);

  }
  //========上面是init

  //显示是否收藏
  showIfCollect(that){
    if(sessionStorage.getItem('user_id')) {
      that.artSer.showcollect(that.userid + '', that.artid + '', function (result) {
        //45表示已收藏
        if (result.statusCode == 45) {
          that.collect_if = true;
          that.className = "btn collect_btn active";
          that.collectName='已收藏'
        } else {
          that.collect_if = false;
          that.className = "btn collect_btn";
          that.collectName='收藏'
        }
      });
    }else{
      that.className = "btn collect_btn";
      that.collectName='收藏'
    }
  }

  //显示收藏数
  showCollectNum(that){
      that.artSer.showcollnum(that.artid + '', function (result) {
        if (result[0].statusCode == 95) {
          that.collectNum=0;
        } else {
          that.collectNum=result[0].coll_num;
        }
      });
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

  // 关闭模态框
  close(){
    this.modal_if = false;
  }

  //去登录界面
  toLogin(){
    this.router.navigate(['/login']);
  }

  //评论该文章
  comment(){
    //如果用户已登录
    if(sessionStorage.getItem('user_id')){
      //从route获取文章id
      this.artid = this.route.snapshot.paramMap.get('article_id');
      let that=this;
      //从sessionStorage中获取用户id
      that.userid=sessionStorage.getItem('user_id');
      //添加评论
      that.CommentsService.addArticleComments(that.articlecomment+'',that.artid+'',that.userid+'',function (result) {
        //当评论成功后
        console.log(result.statusCode+"============这是新插评论");
        if (result.statusCode==25) {
          //评论成功后将评论框中的内容清空
          that.articlecomment='';
          that.CommentsService.getArticleComments(that.artid+'',function (result) {
            //console.log(result.length);
            if (result.statusCode || !result.length) {
              that.comment_if=false;
            }else {
              that.comment_if=true;
              that.comments = result[0];
            }
          });
        }else {
          console.log('失败');
        }
      });
    }else{
      let that=this;
      this.unlogin(that);
    }
  }

  //改变收藏状态
  changeBg(){
    //如果用户已登录
    if(sessionStorage.getItem('user_id')) {
      let that = this;
      //从route获取文章id
      that.artid = this.route.snapshot.paramMap.get('article_id');
      console.log(this.artid+"这是文章Id");

      //从sessionStorage中获取用户id
      that.userid = sessionStorage.getItem('user_id');
      console.log(that.userid+"这是用户Id");
      //点击收藏
      if (that.collectName == '收藏') {
        //console.log("这是未收藏显示");
      that.artSer.insertcoll(that.userid + '', that.artid + '', function (result) {
        //收藏成功
        console.log(result.statusCode+"这是状态码");
        if (result.statusCode == 48) {
          that.showCollectNum(that);
          that.className = "btn collect_btn active";
          that.collectName = '已收藏'
        }
      });
    }else if(that.collectName == '已收藏'){
        //点击删除
        that.artSer.deletecoll(that.userid + '', this.artid + '', function (result) {
          //取消收藏
          if (result.statusCode ==50) {
            that.showCollectNum(that);
            that.className = "btn collect_btn";
            that.collectName = '收藏'
          }
        });
      }
    }else{
      let that=this;
      this.unlogin(that);
    }
  }



}



