import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {TopicService} from "../../services/topic.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-topic-top',
  templateUrl: './topic-top.component.html',
  styleUrls: ['./topic-top.component.css'],
  providers:[TopicService]
})
export class TopicTopComponent implements OnInit {
  _topic: any;
  motai:boolean = true;
  @Input() ziuserid:any;
  @Output() tanchu=new EventEmitter();
  attent_if:boolean=false;
  atten_num:any;
  topic_id:any;

  constructor(
    private route: ActivatedRoute,
    private  tp: TopicService,
    private router:Router,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let id = this.route.snapshot.paramMap.get('topic_id');

    console.log(id);
    let str ='{"topic_id":'+id+'}';
    let topic = JSON.parse(str);
    let that = this;
    that.topic_id=id;
    //=================获取话题信息
    that.tp.getTopicById(topic,function (result) {
      // console.log(JSON.stringify(result[0][0]));
      that._topic = result[0][0];
    });
    //=====================显示是否关注话题
    if(that.ziuserid){
      console.log("这是aaaaaaaa");
    that.tp.showatten(that.ziuserid+'',that.topic_id+'',function (result) {
      // console.log(JSON.stringify(result[0][0]));
      that.atten_num=result.statusCode;
      if(that.atten_num==66){
        that.attent_if=true;
      }else{
        that.attent_if=false;
      }
      //console.log(result.statusCode+"这是关注的话题");
    });



  }




  }
  //==============================init

  //发表文章需判断是否登录
  ifLoginClick(){
    let that=this;
    console.log("判断是否登录");
    if(that.ziuserid){
      this.router.navigate(['/testpublish', this._topic.topic_id]);
    }else {
      this.tanchu.emit(this.motai);
    }
  }

  attentopic(topic_id){
    let that=this;
    if(that.ziuserid){
      let str='{"topic_id":'+ topic_id +',"user_id":'+that.ziuserid+'}';
      let topicatten=JSON.parse(str);
      console.log(topicatten);
      if(!this.attent_if){  //加关注
        that.tp.insertatten(topicatten,function (result) {
          if(result.statusCode==69){//插入话题成功
            that.attent_if=true;
          }
          else
            that.router.navigate(['/**']);
        })
      }
      else {
        that.tp.deleteattent(topicatten,function (result) {
          if(result.statusCode==71){ //删除话题成功
            that.attent_if=false;
          }
          else {
            that.router.navigate(['/**']);
          }
        })
      }
    }
    else {
      this.tanchu.emit(this.motai);
    }
  }



}
