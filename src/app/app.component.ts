
//=======================上面是测试富文本的内容


import { Component, OnInit } from '@angular/core';
//导入服务
import { GlobalPropertyService } from './services/global-property.service';
import {DataService} from "./services/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //添加传值服务
  //providers:[DataService]
})
export class AppComponent implements OnInit {
  //隐藏导航栏
  _hiddenNavs:boolean;
  _hiddenBottom:boolean;
  constructor(
    private  glo:GlobalPropertyService
  ){}
  ngOnInit() {
    //初始化时不隐藏
    this._hiddenNavs = this.glo.hiddenNavs;
    this._hiddenBottom = this.glo.hiddenBottom;
  }
  ngAfterContentChecked() {
    //感受全局变量的变化，起到追踪的的作用
    this._hiddenNavs = this.glo.hiddenNavs;
    this._hiddenBottom = this.glo.hiddenBottom;
  }
}

