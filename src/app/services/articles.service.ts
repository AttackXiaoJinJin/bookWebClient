import {Injectable} from '@angular/core';
// 导入http
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class ArticlesService {
  url: string = 'http://10.40.4.10:3001/article';

  constructor(//构件对象
              private http: HttpClient) {

  }

//=====================下面获取文章详情
  getArticleDetail(articleId, callback) {
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url + '/articledetail', {params: params, article_id: articleId}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }


  // ====================下面发表文章
    insertArticle(formData,callback){
    this.http.post(this.url+'/insertArticle', formData).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //==============获取所有评论最多文章
  getAllArticles(callback) {
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url + '/mostcomarticles', {params: params}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //================搜索文章
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

  //===========显示该文章是否收藏
  showcollect(user_id,article_id,callback){
    this.http.post(this.url+'/showcollect',{user_id:user_id,article_id:article_id}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

//=================点击收藏
  insertcoll(user_id,article_id,callback){
    this.http.post(this.url+'/showcollect/insertcollect',{user_id:user_id,article_id:article_id}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //====================点击取消收藏
  deletecoll(user_id,article_id,callback){
    this.http.post(this.url+'/showcollect/deletecollect',{user_id:user_id,article_id:article_id}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //====================显示收藏数
  showcollnum(article_id,callback){
    this.http.post(this.url+'/showcollnum',{article_id:article_id}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }



}
