import {Component, ElementRef, Renderer, Output, EventEmitter, OnInit} from '@angular/core';
import * as wangEditor from '../../../node_modules/wangeditor/release/wangEditor.js'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private editor:any;
  @Output() onPostData = new EventEmitter();
  constructor(private el: ElementRef,private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let editordom = this.el.nativeElement.querySelector('#editorElem');
    this.editor = new wangEditor(editordom);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create()
  }

  clickHandle():any {
    let data = this.editor.txt.text();
    return data
  }

}
