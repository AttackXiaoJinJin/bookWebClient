import {Component, ElementRef, Renderer, Output, EventEmitter, OnInit } from '@angular/core';
import * as wangEditor from '../../../node_modules/wangeditor/release/wangEditor.js'
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  private editor:any;
  @Output() onPostData = new EventEmitter();
  constructor(private el: ElementRef,private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let editordom = this.el.nativeElement.querySelector('#editorElem');
    //创建编辑器
    this.editor = new wangEditor(editordom);
    //this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create()
  }

  //返回文本中的数据
  clickHandle():any {
    let data = this.editor.txt.html();
    return data
  }
}
