import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

@Injectable()
export class OrdersService {

  url:string='http://101.132.127.138:3000/order';
  constructor(private http:HttpClient) {

  }
//通过订单id显示订单详情
  showorderbyid(order_id,callback){
    this.http.post(this.url+'/showorderbyid',order_id).subscribe(
      function (result) {
        callback(result)
      },
      function (error) {
        console.log(error.message);
      }
    );
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
