import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class CommentsService {
  url:string='http://10.40.4.34:3001/comments';
  constructor(
    private http:HttpClient
  ) { }
  getBookComments(book_id,callback){
    this.http.post(this.url+'/showbookcoms',book_id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
  addBookComments(bookcomment,callback){
    this.http.post(this.url+'/bookcoms',bookcomment).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
