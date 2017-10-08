import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {subscribeOn} from "rxjs/operator/subscribeOn";

@Injectable()
                                                    export class TopicService {
  url : string = 'http://localhost:3001/topic';
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
   getMarticletopic(callback){
     let params = new HttpParams().set('myParam', 'myValue');
     this.http.post(this.url+'/topicbyarticle',{params:params}).subscribe(
       function (result) {
         callback(result);

       },
       function (error) {
         console.log(error.message);
       }
     );
   }
   getMattentopic(callback){
     let params = new HttpParams().set('myParam', 'myValue');
     this.http.post(this.url+'/topicbyattent',{params:params}).subscribe(
       function (result) {
         callback(result);

       },
       function (error) {
         console.log(error.message);
       }
     );
   }
   //得到该用户已关注的所有话题
    showallattent(id,callback){
     this.http.post(this.url+'/showallattent',id).subscribe(
       function (result) {
         callback(result);
       },
       function (error) {
         console.log(error.message);
       }
     )
    }

   // 该用户是否关注该话题
    showatten(user_id,topic_id,callback){
      this.http.post(this.url+'/showattent',{user_id:user_id,topic_id:topic_id}).subscribe(
        function (result) {
            callback(result);
        },
        function (error) {
           console.log(error.message);
        }
      )
    }
    //插入关注成功
    insertatten(topicatten,callback){
       this.http.post(this.url+'/showattent/insertattent',topicatten).subscribe(
           function (result) {
             callback(result);
           },
         function (error) {
           console.log(error.message);
         }
       )
    }
    //删除该关注
  deleteattent( topicatten,callback){
    this.http.post(this.url+'/showattent/deleteattent',topicatten).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
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
