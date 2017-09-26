import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class UsersService {

  url:string='http://10.40.4.34:3001/users';
  constructor(
    private http:HttpClient
  ) {
  }

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

  addUser(user,callback){
    this.http.post(this.url+'/addUser',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  getIdByPhone(user,callback){
    this.http.post(this.url+'/getIdByPhone',user).subscribe(
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
    this,this.http.post(this.url+'/showuserpub',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showuserputcoll(id ,callback){
    this,this.http.post(this.url+'/showuserpubcoll',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  upLoad(fileList,callback){
    if (fileList.length > 0) {
      // let file: File = fileList[0];
      // let formData: FormData = new FormData();
      // formData.append('uploadFile', file, file.name);
      // let headers = new Headers({
      //   "Accept": "application/json"
      // });
      // let options = new RequestOptions({ headers });
      // this.http.post("https://localhost:44372/api/uploadFile", formData, options)
      //   .map(res => res.json())
      //   .catch(error => Observable.throw(error))
      //   .subscribe(
      //     data => console.log('success' + data),
      //     error => console.log(error)
      //   )
    }
  }
}
