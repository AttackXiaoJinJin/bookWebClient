import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { UsersService } from './../services/users.service';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  providers: [ BooksService, UsersService ]
})
export class PayComponent implements OnInit {
  book_id: any;
  order_num: any=1;
  _book: any;
  _user: any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private BooksService:BooksService,
    private userSer: UsersService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.book_id = this.route.snapshot.paramMap.get('book_id');
    let str = '{"book_id":'+ this.book_id +'}';
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
    str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
      // console.log(that._user);
    });
  }
  cut(){
    if(this.order_num>1){
      this.order_num-=1;
    }
  }
  add(){
    this.order_num += 1;
  }
  toPaySecond(){
    this.router.navigate(['/paysecond',this.book_id,this.order_num,this.order_num*this._book.book_price]);
  }
}
