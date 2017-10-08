import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

@Injectable()
export class ReceiveService {

  url:string='http://localhost:3001/receive';
  constructor(private http:HttpClient) {

  }
//============添加订单
  addAddress(address,callback){
    this.http.post(this.url+'/insertreceive',address).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  showAddress(address,callback){
    this.http.post(this.url+'/showreceive',address).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  delAddress(address,callback){
    this.http.post(this.url+'/deletereceive',address).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  checkedAddress(address,callback){
    this.http.post(this.url+'/showaddress',address).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
