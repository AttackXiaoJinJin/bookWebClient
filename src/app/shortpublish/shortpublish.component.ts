import { Component, OnInit,ViewChild } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";
import {Router,ActivatedRoute} from "@angular/router";
import { GlobalPropertyService } from './../services/global-property.service';
import {BooksService} from "../services/books.service";
import {ShortsService} from "../services/shorts.service";

@Component({
  selector: 'app-shortpublish',
  templateUrl: './shortpublish.component.html',
  styleUrls: ['./shortpublish.component.css'],
  providers:[BooksService,ShortsService]
})
export class ShortpublishComponent implements OnInit {
  book_id: any;
  short_title: any;
  tishi: any="发表书评";
  _book:any;

  @ViewChild(PublishComponent) editor: PublishComponent;
  constructor(
    private glo:GlobalPropertyService,
    private BooksService:BooksService,
    private ShortsService:ShortsService,
    private router:Router,
    private aroute:ActivatedRoute
  ) {

  }

  ngOnInit() {
    //初始化界面时默认在顶端
    window.scrollTo(0,0);
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    this.book_id = this.aroute.snapshot.paramMap.get('book_id');
    this.glo.hiddenNavs = true;
    this.glo.hiddenBottom = true;
    //获取书籍信息
    let that=this;
    let str = '{"book_id":'+ this.book_id +'}';
    let book_id = JSON.parse(str);
    that.BooksService.getBookdetailById(book_id,function (result) {
      // console.log(result);
      if (result.statusCode) {
        that.router.navigate(['/**']);
      }else {
        that._book = result[0];
      }
    });
  }
  //=======================上面是init
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
    this.glo.hiddenBottom = false;
  }


  toIndex() {
    this.router.navigate(['/index']);
  }

  // ====================下面是发表文章
  publishShort() {
    let articleContent = this.editor.clickHandle();
    if(!this.short_title){
      this.tishi="请输入书评标题！";
      return false;
    }else if (articleContent=='<p><br></p>') {
      this.tishi="请输入文章内容！";
      return false;
    }else{
      let that=this;
      // let str = '{"short_content":"'+articleContent+'","short_title":"'+this.short_title+'","user_id":'+sessionStorage.getItem('user_id')+',"book_id":'+ this.book_id +'}';
      // let short = JSON.parse(str);
      // console.log(short);
      // that.ShortsService.insertShort(short,function (result) {
      that.ShortsService.insertShort(articleContent+'',this.short_title+'',this.book_id+'',sessionStorage.getItem('user_id')+'',function (result) {
        console.log(JSON.stringify(result)+"这是结果");
        if (result.statusCode==109) {
          that.router.navigate(['/bookdetail',that.book_id]);
        }else {
          that.router.navigate(['/**']);
        }
      });
    }
  }


  //富文本框的函数
  PostData(event):void {
    console.log(event)
  }
}
