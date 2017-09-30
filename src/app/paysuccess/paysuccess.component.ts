import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { ReceiveService } from './../services/receive.service';

@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.component.html',
  styleUrls: ['./paysuccess.component.css'],
  providers: [ UsersService,ReceiveService ]
})
export class PaysuccessComponent implements OnInit {
  price:any;
  order_numbering:any;
  receive_id:any;
  checked_address:any;
  _user:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userSer: UsersService,
    private ReceiveService: ReceiveService,

  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0,0);
    this.price = this.route.snapshot.paramMap.get('price');
    this.order_numbering = this.route.snapshot.paramMap.get('order_numbering');
    this.receive_id = this.route.snapshot.paramMap.get('receive_id');

    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that = this;
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
    });
    let str2 = '{"receive_id":'+ this.receive_id +'}';
    let receive_id = JSON.parse(str2);
    that.ReceiveService.checkedAddress(receive_id, function (result) {
      // console.log(result);
      if(!result.statusCode) {
        that.checked_address = result[0].receive_address;
      }
    });
  }
  toMyorder(){
    this.router.navigate(['personal-center',5]);
  }
}
