import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class UsersService {

  url:string='http://101.132.127.138:3000/users';
  constructor(
    private http:HttpClient
  ) { }

  login(user,callback){
    this.http.post(this.url+'/login',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  addUser(user_phone,user_name,user_passwd,callback){
    this.http.post(this.url+'/addUser',{user_phone:user_phone,user_name:user_name,user_passwd:user_passwd}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  getIdByPhone(phone,callback){
    this.http.post(this.url+'/getIdByPhone',{user_phone:phone}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getBaseById(user,callback){
    this.http.post(this.url+'/getbasebyid',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getMoreById(user,callback){
    this.http.post(this.url+'/getmorebyid',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getUserBooks(user,callback){
    this.http.post(this.url+'/userbook',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getUserTopics(user,callback){
    this.http.post(this.url+'/usertopic',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getUserArticles(user,callback){
    this.http.post(this.url+'/userarticle',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  showuserput(id,callback){
    this.http.post(this.url+'/showuserpub',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showuserputcoll(id ,callback){
    this.http.post(this.url+'/showuserpubcoll',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  upLoad(formData,callback){
    this.http.post(this.url+'/upload', formData).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  sendmessage(tel,callback){
    this.http.post(this.url+'/sendmessage',{phone:tel}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //================获取所评论的书籍的回复
  getuserbkrecoms(user_id,callback){
    this.http.post(this.url+'/showuserrecom',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  //================书籍上被回复的评论
  userbkcom(bookcom_id,callback){
    this.http.post(this.url+'/userbkcom',{bookcom_id:bookcom_id}).subscribe(
      function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //================获取所评论的文章的回复
  getuserartrecoms(user_id,callback){
    this.http.post(this.url+'/showuserartrecom',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  //================文章上被回复的评论
  userartcom(articlecom_id,callback){
    this.http.post(this.url+'/userartcom',{articlecom_id:articlecom_id}).subscribe(
      function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  //================清空书籍的回复
  updatebk(user_id,callback){
    this.http.post(this.url+'/updatebk',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  //================清空文章的回复
  updateart(user_id,callback){
    this.http.post(this.url+'/updateart',{user_id:user_id}).subscribe(
      function (result) {
        callback(result);
        console.log(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  modifyintro(user_id,user_introduction,callback){
    this.http.post(this.url+'/updateintro',{user_id:user_id,user_introduction:user_introduction}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
