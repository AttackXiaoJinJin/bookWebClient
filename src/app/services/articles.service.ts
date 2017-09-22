import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';
@Injectable()
export class ArticlesService {
  url:string='http://10.40.4.34:3001/article';
  constructor(private http:HttpClient) {

  }

//=====================下面获取文章详情
  getArticleDetail(articleId,callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/articledetail',{params:params,article_id:articleId}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }


  //====================下面发表文章
  insertArticle(userId,topicId,articleContent,articleTitle,callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/insertArticle',{params:params,user_id:userId,topic_id:topicId,article_content:articleContent,article_title:articleTitle}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  getAllArticles(callback){
    let params = new HttpParams().set('myParam','myValue');
    this.http.post(this.url+'/mostcomarticles',{params:params}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  searchArticle(searchCon,callback){
    this.http.post(this.url+'/searcharticle',searchCon).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
