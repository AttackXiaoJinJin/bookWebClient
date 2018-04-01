import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class RecommentsService {
  url:string='http://101.132.127.138:3000/recomments';
  constructor(
    private http:HttpClient
  ) { }



  //================获取书籍评论的回复
  getbkrecoms(bookcom_id,callback){
    this.http.post(this.url+'/showrecom',{bookcom_id:bookcom_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //=================书籍回复评论
  addbkrecoms(user_id,recom_content,bookcom_id,callback){
    this.http.post(this.url+'/insertrecom',{user_id:user_id,recom_content:recom_content,bookcom_id:bookcom_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //=================获取书籍回复数
  userbknum(user_id,callback){
    this.http.post(this.url+'/userbknum',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }



  //===============获取显示文章评论回复
  getartrecoms(articlecom_id,callback){
    this.http.post(this.url+'/showartrecom',{articlecom_id: articlecom_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //=================文章回复评论
  addartrecoms(user_id,recom_content,artcom_id,callback){
    this.http.post(this.url+'/insertartrecom',{user_id:user_id,recom_content:recom_content,artcom_id:artcom_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //=================获取文章回复数
  userartnum(user_id,callback){
    this.http.post(this.url+'/userartnum',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }


}
