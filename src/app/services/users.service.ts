import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class UsersService {

  url:string='http://localhost:3001/users';
  constructor(
    private http:HttpClient,
    //private ls;LocalStorage

  ) {

  }

  login(user,callback){
  // let head=new HttpHeaders({token:this.ls.get("token")});
  //   this.http.post(this.url+'/login',user,{headers:head,params:param}).subscribe(
    console.log(this.url+'/login');
    this.http.post(this.url+'/login',user).subscribe(
      function (result) {
        //console.log("service的user"+JSON.stringify(result.statusCode));
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }

    )
  }

  addUser(){

  }

  editUser(){

  }
/*
  getAllUsers(id){

    let head=new HttpHeaders({token:this.ls.get("token")});
    //                               必须连写！
    let param=new HttpParams().set({'id':'001'});
    //option对象必须为header
    this.http.get(this.url+'/getAllUsers',{headers:head,params:param}).subscribe(
    function (result) {
      console(result+"test================token");
    },
    function (error) {
      console.log(error.message);
    }
     )

  }
*/
}
