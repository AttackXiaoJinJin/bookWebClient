import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class TopicService {
  url : string = 'http://10.40.4.34:3001/topic';
  constructor(private http : HttpClient) { }
  getAllTopic(callback) {
    let params = new HttpParams().set('myParam' , 'myValue');
    this.http.post(this.url+ '/topicbyattent' , {params:params}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      });
  }
  getTopicById(id,callback){
    this.http.post(this.url+'/gettopicbyid',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
  );

  }
  getHotArticleById(id,callback){
    this.http.post( this.url + '/topicarticle',id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  getCollectAritcleByld(id , callback) {
    this.http.post( this.url + '/topcolart' , id).subscribe(
      function (result) {
        callback(result);
      },
       function (error) {
         console.log(error.message);
       }
    );
  }

  getNewAritcleByld(id , callback) {
    this.http.post(this.url + '/topnewart', id).subscribe(
     function (result) {
     callback(result);
  },
      function (error) {
         console.log(error.message);
      }
    );
  }
  alltopics(callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/alltopics',{params:params}).subscribe(
      function (result) {
        callback(result);

      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  topicidbyname(topicName,callback){
    let params = new HttpParams().set('myParam', 'myValue');
    this.http.post(this.url+'/topicidbyname',{params:params,topic_name:topicName}).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }


  searchTopic(searchCon,callback){
    this.http.post(this.url+'/searchtopic',searchCon).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

}
