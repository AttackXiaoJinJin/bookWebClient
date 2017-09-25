import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.component.html',
  styleUrls: ['./paysuccess.component.css'],
  providers: [ UsersService ]
})
export class PaysuccessComponent implements OnInit {
  price:any;
  order_numbering:any;
  _user:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userSer: UsersService,
  ) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user_id')){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0,0);
    this.price = this.route.snapshot.paramMap.get('price');
    this.order_numbering = this.route.snapshot.paramMap.get('order_numbering');

    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that = this;
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
    });
  }
  toMyorder(){
    this.router.navigate(['personal-center',4]);
  }
}
