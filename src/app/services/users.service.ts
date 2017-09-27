import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class UsersService {

  url:string='http://10.40.4.34:3001/users';
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
}
