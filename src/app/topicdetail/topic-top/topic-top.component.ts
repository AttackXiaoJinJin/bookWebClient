import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {TopicService} from "../../services/topic.service";
@Component({
  selector: 'app-topic-top',
  templateUrl: './topic-top.component.html',
  styleUrls: ['./topic-top.component.css'],
  providers:[TopicService]
})
export class TopicTopComponent implements OnInit {
  _topic: any;
  constructor(
    private route: ActivatedRoute,
    private  tp: TopicService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('topic_id');
    console.log(id);
    let str ='{"topic_id":'+id+'}';
    let topic = JSON.parse(str);
    let that = this;
    that.tp.getTopicById(topic,function (result) {
      // console.log(JSON.stringify(result[0][0]));
      that._topic = result[0][0];
    })
  }

}
