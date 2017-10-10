import {Injectable} from '@angular/core';
// 导入http
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class ShortsService {
  url: string = 'http://10.40.4.10:3001/short';

  constructor(//构件对象
              private http: HttpClient) {

  }

  // ====================下面获取文章(时间排序)
  getShortsTime(formData,callback){
    this.http.post(this.url+'/shortstime', formData).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  // insertShort(short,callback){
  insertShort(short_content,short_title,book_id,user_id,callback){
    this.http.post(this.url+'/insertshort',{short_content:short_content,short_title:short_title,book_id:book_id,user_id:user_id}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  getShortDetail(short,callback) {
    this.http.post(this.url + '/shortdetail', short).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  likeShort(short,callback){
    this.http.post(this.url+'/likeshort',short).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  dislikeShort(short,callback){
    this.http.post(this.url+'/dislikeshort',short).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
