import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { UsersService } from './../services/users.service';
import { ReceiveService } from './../services/receive.service';
import { GlobalPropertyService } from './../services/global-property.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  providers: [ BooksService, UsersService, ReceiveService]
})
export class PayComponent implements OnInit {
  book_id: any;
  order_num: any=1;
  _book: any;
  _user: any;
  _addresses:any;
  checked_address:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private BooksService:BooksService,
    private userSer: UsersService,
    private ReceiveService: ReceiveService,
    private  glo:GlobalPropertyService,

  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0,0);
    this.glo.receive_id=0;
    this.book_id = this.route.snapshot.paramMap.get('book_id');
    let str = '{"book_id":'+ this.book_id +'}';
    let book_id = JSON.parse(str);
    let that=this;
    that.BooksService.getBookdetailById(book_id,function (result) {
      // console.log(result);
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
    that.ReceiveService.showAddress(user_id, function (result) {
      if(!result.statusCode) {
        that._addresses = result;
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
    if(this.checked_address){
      this.router.navigate(['/paysecond',this.book_id,this.order_num,(this.order_num*this._book.book_price).toFixed(2),this.glo.receive_id]);
    }else{
      alert('请选择地址');
    }
  }
  checkAddress(receiveid){
    this.glo.receive_id=receiveid;
    // console.log(this.glo.receive_id);
    let str = '{"receive_id":'+ this.glo.receive_id +'}';
    let receive_id = JSON.parse(str);
    let that=this;
    that.ReceiveService.checkedAddress(receive_id, function (result) {
      // console.log(result);
      if(!result.statusCode) {
        that.checked_address = result[0].receive_address;
      }
    });
  }
}
