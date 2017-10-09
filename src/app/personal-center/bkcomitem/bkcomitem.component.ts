import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-bkcomitem',
  templateUrl: './bkcomitem.component.html',
  styleUrls: ['./bkcomitem.component.css'],
  providers: [UsersService]
})
export class BkcomitemComponent implements OnInit {
  @Input() _recomment: any;
  _comment: any;
  @Input() mainname: any;
  @Input() mainid: any;
  bookcomId:any;
  constructor(
    private router: Router,
    private usersSer: UsersService,
  ) { }
  ngOnInit() {
    this.bookcomId=this._recomment.bookcom_id;
    //===================获取回复的书评
    this.comment();

  }

  comment(){
    let that=this;
    that.usersSer.userbkcom(this.bookcomId+'',function (result) {
      that._comment=result;
      // console.log(JSON.stringify(that._comments)+"这是评论")
    });
  }

  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }

  toBookDetail(id) {
    this.router.navigate(['/bookdetail', id]);
  }

}
