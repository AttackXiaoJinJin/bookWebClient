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
  _user:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userSer: UsersService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that = this;
    that.userSer.getMoreById(user_id, function (result) {
      if(!result.statusCode) {
        that._user = result[0];
      }
    });
  }
  toIndex(){
    this.router.navigate(['/index']);
  }
}
