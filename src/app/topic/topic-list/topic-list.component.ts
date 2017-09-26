import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Router} from "@angular/router";
import {TopicService} from "../../services/topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  providers:[TopicService]
})
export class TopicListComponent implements OnInit {
  id: any;
  @Input() _topic: any;
  scrollTop: any;
  modal_if: boolean=false;
  atten_if:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private  tp:TopicService
    ) { }

  ngOnInit() {
    console.log(this._topic);
    window.scrollTo(0,0);
    let that=this;
    // that.num=that._topic.attent_num;
    let str = '{"user_id":'+sessionStorage.getItem('user_id')+'}';
    let user_id= JSON.parse(str);
        that.tp.showallattent(user_id,function (res) {

          for(let i=0;i<res.length;i++){
            // console.log(res[i]);
            // console.log(res[i].topic_id);
            // let str2='{"topic_id":'+ res[i].topic_id+',"user_id":'+sessionStorage.getItem('user_id')+'}';
            // let topicatten = JSON.parse(str2);
            // that.tp.showatten(topicatten,function (result) {
            //    console.log("--------");
            //    console.log(result.statusCode);
            //    if (result.statusCode==66) {
            //          that.atten_if=true;
            //        }else {
            //          that.atten_if=false;
            //        }
            //  })

            if(res[i].topic_id==that._topic.topic_id){
              that.atten_if=true;
            }
          }
        })
  }

  toTdetail(id){
    this.router.navigate(['/topicdetail', id]);
  }
  close(){
    this.modal_if = false;
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
  attentopic(topic_id){
    if(sessionStorage.getItem('user_id')){
      let that=this;
      let str='{"topic_id":'+ topic_id +',"user_id":'+sessionStorage.getItem('user_id')+'}';
      let topicatten=JSON.parse(str);
      console.log(topicatten);
      if(!this.atten_if){  //加关注
        that.tp.insertatten(topicatten,function (result) {
          if(result.statusCode==69){//插入话题成功
            that.atten_if=true;
            that._topic.attent_num+=1;
          }
          else
            that.router.navigate(['/**']);
        })
      }
      else {
        that.tp.deleteattent(topicatten,function (result) {

          if(result.statusCode==71){ //删除话题成功
             that.atten_if=false;
             that._topic.attent_num-=1;
          }
          else {
            that.router.navigate(['/**']);
          }
        })
      }
    }
    // else {
    //   this.scrollTop=window.scrollY+"px";
    //   this.modal_if=true;
    // }
  }

}
