import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '../services/books.service';
import { CommentsService } from '../services/comments.service';
import { BeautysService } from '../services/beauty.service';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],
  providers: [ BooksService, CommentsService, BeautysService ]
})
export class BookdetailComponent implements OnInit {
  id: any;
  _book: any;
  _beautys: any;
  _comments: any;
  beauty_if: boolean;
  comment_if: boolean;
  scrollTop: any;
  modal_if: boolean=false;
  _bookcomment: any;
  love_if: boolean=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private BooksService:BooksService,
    private CommentsService:CommentsService,
    private BeautysService:BeautysService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.id = this.route.snapshot.paramMap.get('book_id');
    let str = '{"book_id":'+ this.id +'}';
    let book_id = JSON.parse(str);
    let that=this;
    let str2 = '{"book_id":'+ this.id +',"user_id":'+sessionStorage.getItem('user_id')+'}';
    let booklove = JSON.parse(str2);
    that.BooksService.getBookdetailById(book_id,function (result) {
      console.log(result);
      if (result.statusCode) {
        that.router.navigate(['/**']);
      }else {
        that._book = result[0];
      }
    });
    that.BeautysService.getAllBeautys(book_id,function (result) {
      if (result.statusCode) {
        that.beauty_if = false;
      }else {
        that.beauty_if = true;
        that._beautys = result[0];
      }
    });
    that.CommentsService.getBookComments(book_id,function (result) {
      console.log(JSON.stringify(result)+"获取书籍评论");
      if (result.statusCode || !result.length) {
        that.comment_if=false;
      }else {
        that.comment_if=true;
        that._comments = result[0];
      }
    });
    that.BooksService.showlove(booklove,function (result) {
      //38表示已喜欢
      if (result.statusCode==38) {
        that.love_if=true;
      }else {
        that.love_if=false;
      }
    });
  }
  toPay() {
    if(sessionStorage.getItem("user_id")){
      this.router.navigate(['/pay',this.id]);
    }else{
      this.modal_if = true;
    }
  }
  close(){
    this.modal_if = false;
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
  comment(){
    if(sessionStorage.getItem('user_id')){
      // console.log(this._bookcomment);
      let str = '{"book_id":'+ this.id +',"user_id":'+sessionStorage.getItem('user_id')+',"bookcom_content":"'+this._bookcomment+'"}';
      // console.log(str);
      let bookcomment = JSON.parse(str);
      // console.log(bookcomment);
      let that=this;

      that.CommentsService.addBookComments(bookcomment,function (result) {
        if (result.statusCode==22) {
          that._bookcomment='';
          let str = '{"book_id":'+ that.id +'}';
          let book_id = JSON.parse(str);
          that.CommentsService.getBookComments(book_id,function (result) {
            console.log(result.length);
            if (result.statusCode || !result.length) {
              that.comment_if=false;
            }else {
              that.comment_if=true;
              that._comments = result;
            }
          });
        }else {
          console.log('失败');
        }
      });
    }else{
      // console.log(window.scrollY);
      this.scrollTop = window.scrollY+"px";
      // console.log(this.scrollTop);
      this.modal_if = true;
    }
  }
  lovebook(){
    if(sessionStorage.getItem('user_id')){
      let that = this;
      let str = '{"book_id":'+ this.id +',"user_id":'+sessionStorage.getItem('user_id')+'}';
      let booklove = JSON.parse(str);
      // console.log(booklove);
      if(!this.love_if){
        that.BooksService.insertlove(booklove,function (result) {
          // console.log(result);
          if (result.statusCode==41) {
            that.love_if=true;
          }else {
            that.router.navigate(['/**']);
          }
        });
      }else{
        that.BooksService.deletelove(booklove,function (result) {
          // console.log(result);
          if (result.statusCode==43) {
            that.love_if=false;
          }else {
            that.router.navigate(['/**']);
          }
        });
      }
    }else{
      this.scrollTop = window.scrollY+"px";
      this.modal_if = true;
    }
  }
}
