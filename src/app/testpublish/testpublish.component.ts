import { Component, OnInit,ViewChild } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";

@Component({
  selector: 'app-testpublish',
  templateUrl: './testpublish.component.html',
  styleUrls: ['./testpublish.component.css']
})
export class TestpublishComponent implements OnInit {
  title = 'app works!';
  clickValue:any;
  @ViewChild(PublishComponent) editor: PublishComponent;
  constructor() { }

  ngOnInit() {
  }

    publishTopic() {
    let topicContent = this.editor.clickHandle();

    if(!topicContent){
      alert('请输入内容！');
      return
    }
      this.clickValue=topicContent;
    //console.log(topicContent);
  }

  PostData(event):void {
    console.log(event)
  }

}
