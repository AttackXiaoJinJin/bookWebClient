import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class BeautysService {
  url:string='http://localhost:3001/beauty';
  constructor(
    private http:HttpClient
  ) { }
  getAllBeautys(book_id,callback){
    this.http.post(this.url+'/getbeauty',book_id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }
}
