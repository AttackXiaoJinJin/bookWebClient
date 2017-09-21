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
  _bookcomment: any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private BooksService:BooksService,
    private CommentsService:CommentsService,
    private BeautysService:BeautysService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('book_id');
    let str = '{"book_id":'+ this.id +'}';
    let book_id = JSON.parse(str);
    let that=this;

    that.BooksService.getBookdetailById(book_id,function (result) {
      console.log(result)
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
      console.log(result.length);
      if (result.statusCode || !result.length) {
        that.comment_if=false;
      }else {
        that.comment_if=true;
        that._comments = result;
      }
    });
  }
  toPay() {
    this.router.navigate(['/pay']);
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
      console.log('未登录');
    }
  }
}
