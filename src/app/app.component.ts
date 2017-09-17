// import {Component, ViewChild} from '@angular/core';
// import {NavigationComponent} from "./navigation/navigation.component";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
//
//   @ViewChild(NavigationComponent) editor: NavigationComponent;
//
//   constructor() {}
//
//   publishTopic() {
//     let topicContent = this.editor.clickHandle();
//
//     if(!topicContent){
//       alert('请输入内容！');
//       return
//     }
//     alert(topicContent)
//   }
//
//   PostData(event):void {
//     console.log(event)
//   }
// }
//=======================上面是测试富文本的内容


import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './services/global-property.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _hiddenNavs:boolean;
  constructor(
    private  glo:GlobalPropertyService
  ){}
  ngOnInit() {
    this._hiddenNavs = this.glo.hiddenNavs;
  }
  ngAfterContentChecked() {
    this._hiddenNavs = this.glo.hiddenNavs;
  }
}

