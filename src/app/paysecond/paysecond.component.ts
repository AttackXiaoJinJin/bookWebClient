import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
@Component({
  selector: 'app-paysecond',
  templateUrl: './paysecond.component.html',
  styleUrls: ['./paysecond.component.css'],
  providers: [ UsersService ]
})
export class PaysecondComponent implements OnInit {
  book_id: any;
  order_num: any;
  price: any;
  _user: any;
  order_numbering: string="";
  m:any='30';
  s:any='00';
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userSer: UsersService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.book_id = this.route.snapshot.paramMap.get('book_id');
    this.order_num = this.route.snapshot.paramMap.get('order_num');
    this.price = this.route.snapshot.paramMap.get('price');

    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that = this;
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
    });
    this.createOrderNum();
    // console.log(this.order_numbering);
    let d = new Date("1111/1/1,0:30:0");
    let interval = setInterval(function () {
      that.m = d.getMinutes();
      that.s = d.getSeconds();
      that.m = that.m < 10 ? "0" + that.m : that.m;
      that.s = that.s < 10 ? "0" + that.s : that.s;
      if (that.m == 0 && that.s == 0) {
        clearInterval(interval);
        return;
      }
      d.setSeconds(that.s - 1);
    },1000)
  }
  pay(){
    this.router.navigate(['/paysuccess']);
  }

  //创建唯一的订单号
  createOrderNum(){
    let nowtime = new Date();
    this.order_numbering+=nowtime.getFullYear();
    if(nowtime.getMonth()<10){
      this.order_numbering = this.order_numbering+"0"+(nowtime.getMonth()+1);
    }else{
      this.order_numbering = this.order_numbering+(nowtime.getMonth()+1);
    }
    if(nowtime.getDate()<10){
      this.order_numbering = this.order_numbering+"0"+nowtime.getDate();
    }else{
      this.order_numbering = this.order_numbering+nowtime.getDate();
    }
    if(nowtime.getHours()<10){
      this.order_numbering = this.order_numbering+"0"+nowtime.getHours();
    }else{
      this.order_numbering = this.order_numbering+nowtime.getHours();
    }
    if(nowtime.getMinutes()<10){
      this.order_numbering = this.order_numbering+"0"+nowtime.getMinutes();
    }else{
      this.order_numbering = this.order_numbering+nowtime.getMinutes();
    }
    if(nowtime.getSeconds()<10){
      this.order_numbering = this.order_numbering+"0"+nowtime.getSeconds();
    }else{
      this.order_numbering = this.order_numbering+nowtime.getSeconds();
    }
    this.order_numbering = this.order_numbering+sessionStorage.getItem('user_id')+this.book_id+this.order_num;
  }
}
