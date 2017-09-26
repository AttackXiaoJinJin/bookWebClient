import { Component, OnInit,ViewChild } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";
import {ArticlesService} from "../services/articles.service";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {HttpParams,HttpClient,HttpHeaders,HttpRequest} from "@angular/common/http";
import {TopicService} from "../services/topic.service";
import { GlobalPropertyService } from './../services/global-property.service';

@Component({
  selector: 'app-testpublish',
  templateUrl: './testpublish.component.html',
  styleUrls: ['./testpublish.component.css'],
  providers:[ArticlesService,TopicService]
})

export class TestpublishComponent implements OnInit {
  article_title:any;
  article:any;
  alltopics:any;
  topicname:any;
  topicid:any;
  scroll_top:any;
  full_height:any;
  userid:any;
  tishi:any="发表文章";
  articleimg:any;

  @ViewChild(PublishComponent) editor: PublishComponent;
  constructor(
    private  glo:GlobalPropertyService,
    private http:HttpClient,
    private artSer:ArticlesService,
    private topSer:TopicService,
    private router:Router,
    private aroute:ActivatedRoute
  ) {

  }

  ngOnInit() {
    //初始化界面时默认在顶端
    window.scrollTo(0,0);
    this.glo.hiddenNavs = true;
    this.glo.hiddenBottom = true;
    let that=this;
    that.userid=sessionStorage.getItem('user_id');

    //获取所有话题
    that.topSer.alltopics(function (result) {
      that.alltopics=result;
    });




  }
  //=======================上面是init
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
    this.glo.hiddenBottom = false;
  }


  toIndex() {
    this.router.navigate(['/index']);
  }
  //====================下面获取话题id
  showTop(event){
    let that=this;
    that.topicname=event.target.value;
    // console.log(that.topicname);
    that.topSer.topicidbyname(that.topicname+'',function (result) {
      that.topicid=result[0].topic_id;
      // console.log( result[0].topic_id+"这是话题id");
    })
  }

  //============================获取图片路径
  // chooseImg(event){
  //   let that=this;
  //   that.articleimg=event.target.value;
  //   console.log(that.articleimg);
  // }

  //预览图片
  // selectedFileOnChanged(event: any) {
  //   console.log(event.target.value);
  // }

  // uploadFileHandel() {
  //   this.uploader.queue[0].onSuccess = function (response, status, headers) {
  //     // 上传文件成功
  //     if (status == 200) {
  //       // 上传文件后获取服务器返回的数据
  //       let tempRes = JSON.parse(response);
  //     }else {
  //       // 上传文件后获取服务器返回的数据错误
  //     }
  //   };
  //   this.uploader.queue[0].upload(); // 开始上传
  // }

  //===============================上传
  getUpload(obj, e) {
    if (e.target.files[0]) {

     let file = e.target.files[0];
      obj.file = file;
      this.articleimg=obj.file;
    }
  }







  //====================下面是发表文章
  publishArticle() {
    const formData = new FormData();
    formData.append('file', this.articleimg);
    let that=this;
    //最先判断用户是否登录
    if(that.userid) {
      let articleContent = that.editor.clickHandle();
      // console.log(articleContent+"这是文章内容");
      if(!that.article_title){
        that.tishi="请输入文章标题！";
        return false;
      }else if (articleContent=='<p><br></p>') {
        that.tishi="请输入文章内容！";
        return false;
      }else if(that.articleimg){
        console.log(that.articleimg+"这是文章图片");
      //let that = this;
      that.artSer.insertArticle(that.userid+'', that.topicid + '', articleContent+'', that.article_title+'',function (result) {
        that.article = result;
        console.log(JSON.stringify(result) + "这是插入文章");
      });
      }
    }else{
      let that=this;
      that.tishi="未登录！";
      return false;

    }
  }


    //富文本框的函数
  PostData(event):void {
    console.log(event)
  }
}

