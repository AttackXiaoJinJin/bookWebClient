import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() zitanchu=new EventEmitter();
  motai:boolean = true;
  atten_if:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private  tp:TopicService
    ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let that=this;
    let str = '{"user_id":'+sessionStorage.getItem('user_id')+'}';
    let user_id= JSON.parse(str);
        that.tp.showallattent(user_id,function (res) {
          for(let i=0;i<res.length;i++){
            if(res[i].topic_id==that._topic.topic_id){
              that.atten_if=true;
            }
          }
        })
  }
//======================init
  toTdetail(id){
    this.router.navigate(['/topicdetail', id]);
  }

  //关注话题
  attentopic(topic_id){
    //如果已登录
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
      //取消关注
      else {
        that.tp.deleteattent(topicatten,function (result) {

          if(result.statusCode==71){ //删除话题成功
             that.atten_if=false;
             that._topic.attent_num-=1;
          }
          else {
            //删除失败
            that.router.navigate(['/**']);
          }
        })
      }
    }
    else {
      console.log("弹出模态框");
      //弹出模态框
      this.zitanchu.emit(this.motai);
    }
  }
}
