import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

@Injectable()
export class OrdersService {

  url:string='http://10.40.4.10:3001/order';
  constructor(private http:HttpClient) {

  }
//============添加订单
  addOrder(order,callback){
    this.http.post(this.url+'/addorder',order).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  showOrder(order,callback){
    this.http.post(this.url+'/showorder',order).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  delOrder(order,callback){
    this.http.post(this.url+'/deleteorder',order).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
