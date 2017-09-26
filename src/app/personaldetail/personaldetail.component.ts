import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service"
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css'],
  providers:[UsersService]
})
export class PersonaldetailComponent implements OnInit {
  tabs = ['他的文章',  '他的热门'];
  tab_index = 0;
  _articles: any;
  _Hotarticles: any;
  constructor(
    private  user:UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('user_id');
    const str = '{"user_id" : ' + id + '}';
    const user_id = JSON.parse(str);
    const that = this;
   that.user.showuserput(user_id ,function (result) {
      that._articles=result;

   })
    that.user.showuserputcoll(user_id ,function (result) {
      that._Hotarticles=result;

    })
  }

}
