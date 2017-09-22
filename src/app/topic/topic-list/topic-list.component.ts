import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Input() _topic:any;
  _ifatt:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this._ifatt="+关注";
  }
  toTdetail(id){
    this.router.navigate(['/topicdetail', id]);
  }

  addAtt(){
    if(this._ifatt=="+关注"){
      this._ifatt="已关注";
    }else{
      this._ifatt="+关注";
    }

  }

}
