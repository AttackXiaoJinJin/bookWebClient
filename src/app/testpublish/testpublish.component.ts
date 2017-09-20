import { Component, OnInit,ViewChild } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";
import {ArticlesService} from "../services/articles.service";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {HttpParams,HttpClient,HttpHeaders,HttpRequest} from "@angular/common/http";
import {TopicService} from "../services/topic.service";

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
  //url:string='http://localhost:3001/article';
  @ViewChild(PublishComponent) editor: PublishComponent;

  constructor(private http:HttpClient,private artSer:ArticlesService,private topSer:TopicService, private router:Router,private aroute:ActivatedRoute) {

  }

  ngOnInit() {
    let that=this;
    that.topSer.alltopics(function (result) {
      that.alltopics=result;
      console.log(JSON.stringify(result)+"这是获取所有话题");
    });

  }

    publishTopic() {
      let topicContent = this.editor.clickHandle();

      if (!topicContent) {
        alert('请输入内容！');
        return
      }
      //====================下面发表文章
      let that=this;
      that.artSer.insertArticle(1,3,topicContent,this.article_title,function (result) {
        that.article=result;
        console.log(JSON.stringify(result)+"这是插入文章");
      })
    }

  PostData(event):void {
    console.log(event)
  }

}

