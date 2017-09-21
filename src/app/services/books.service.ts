import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

@Injectable()
export class BooksService {

  url:string='http://10.40.4.34:3001/books';
  constructor(private http:HttpClient) {

  }

  mostcombooks(callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/mostcombooks',{params:params}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  getBookdetailById(book_id,callback){
    this.http.post(this.url+'/bookdetail',book_id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  getAllBooks(callback){
    let params = new HttpParams().set('myParam','myValue');
    this.http.post(this.url+'/allbooks',{params:params}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }


  searchBook(searchCon,callback){
    this.http.post(this.url+'/searchbook',searchCon).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

}
