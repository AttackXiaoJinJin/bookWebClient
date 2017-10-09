import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-allcom',
  templateUrl: './allcom.component.html',
  styleUrls: ['./allcom.component.css'],
  providers: [UsersService]
})
export class AllcomComponent implements OnInit {
  tabs = [{"text":"书籍回复"}, {"text":"文章回复"}];
  tab_index = 0;
  @Input() _recomment: any;
  @Input() _artrecomment: any;
  @Input() mainname: any;
  @Input() mainid: any;
  _recomments: any;
  _artrecomments: any;

  userId:any;
  constructor(
    private route: ActivatedRoute,
    private usersSer: UsersService,
  ) { }

  ngOnInit() {
    let that = this;
    that.userId=sessionStorage.getItem('user_id');
    //==================显示书的回复
    this.recomment();
    this.artrecomment();


  }

  recomment(){
    let that=this;
    that.usersSer.getuserbkrecoms(that.userId+'',function (result) {
      if(!result.statusCode) {
        that._recomments = result;
      }
    });
  }

  artrecomment(){
    let that=this;
    that.usersSer.getuserartrecoms(that.userId+'',function (result) {
      if(!result.statusCode) {
        that._artrecomments = result;
        // console.log(JSON.stringify(result)+'这是回复文章')
      }
    });
  }


}
