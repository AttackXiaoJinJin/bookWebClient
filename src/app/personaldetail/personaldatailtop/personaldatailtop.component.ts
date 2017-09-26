import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-personaldatailtop',
  templateUrl: './personaldatailtop.component.html',
  styleUrls: ['./personaldatailtop.component.css'],
  providers:[UsersService]
})
export class PersonaldatailtopComponent implements OnInit {

  _porsonal:any;
  constructor(
    private user:UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('user_id');
    console.log(id);
    let str ='{"user_id":'+id+'}';
    let user = JSON.parse(str);
    let that = this;
      that.user.getBaseById(user,function (result) {
          that._porsonal=result[0];
          // console.log( that._porsonal);
      })
  }

}
