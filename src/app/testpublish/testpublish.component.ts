import { Component, OnInit,ViewChild } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";
import {ArticlesService} from "../services/articles.service";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {HttpParams,HttpClient,HttpHeaders,HttpRequest} from "@angular/common/http";
import {TopicService} from "../services/topic.service";
import { GlobalPropertyService } from './../services/global-property.service';
declare var $:any;

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
  formData: FormData;

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
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    this.glo.hiddenNavs = true;
    this.glo.hiddenBottom = true;
    let that=this;
    that.userid=sessionStorage.getItem('user_id');

    //获取所有话题
    that.topSer.alltopics(function (result) {
      that.alltopics=result;
      that.topicid = result[0].topic_id;
    });
    this.formData = new FormData();
    this.formData.append('user_id',sessionStorage.getItem('user_id'));
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
  getTopicId(event){
    this.topicid = this.alltopics[event.selectedIndex].topic_id;
  }

  //===============================预览图片
  getIamge(fileList: FileList) {
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.formData.append('uploadFile', file, file.name);
      var img=new Image();
      img.src=window.URL.createObjectURL(file);
      var $img=$(img);
      $img.css("width","100%");
      $img.css("height","100%");
      img.onload=function () {
        $("#preview").empty().append($img);
        //释放所占用的内容
        window.URL.revokeObjectURL(img.src);
      };
      console.log(img.src);
    }
  }

  //====================下面是发表文章
  publishArticle() {
    let articleContent = this.editor.clickHandle();
    // console.log(articleContent+"这是文章内容");
    if(!this.article_title){
      this.tishi="请输入文章标题！";
      return false;
    }else if (articleContent=='<p><br></p>') {
      this.tishi="请输入文章内容！";
      return false;
    }else if(!this.formData.get('uploadFile')){
      this.tishi="请上传文章封面！";
    }else{
      this.formData.append('topic_id',this.topicid);
      this.formData.append('article_content',articleContent);
      this.formData.append('article_title',this.article_title);
      // console.log(this.formData.get('user_id'));
      // console.log(this.formData.get('uploadFile'));
      // console.log(this.formData.get('topic_id'));
      // console.log(this.formData.get('article_content'));
      // console.log(this.formData.get('article_title'));

      // let that=this;
      // that.artSer.insertArticle(that.userid+'', that.topicid + '', articleContent+'', that.article_title+'',function (result) {
      //   that.article = result;
      //   console.log(JSON.stringify(result) + "这是插入文章");
      // });
    }
  }


    //富文本框的函数
  PostData(event):void {
    console.log(event)
  }
}

