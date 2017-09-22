import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UsersService]
})
export class NavComponent implements OnInit {
  user:any;
  _search:any;
  isLogin:boolean = false;
  constructor(
    private userSer:UsersService,
    private router:Router,
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem('user_id')){
      let str = '{"user_id":'+ sessionStorage.getItem('user_id') +'}';
      let user_id = JSON.parse(str);
      let that=this;
      that.userSer.getBaseById(user_id,function (result) {
        // console.log(result);
        if(result.statusCode) {
          that.router.navigate(['/**']);
        }else{
          that.user = result[0];
        }
      });
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
  remove(){
    sessionStorage.removeItem('user_id');
    this.router.navigate(['/index']);
    this.isLogin = false;
  }
  toSearch(){
    if(this._search){
      if(window.location.href.indexOf('search')){
        window.location.href=window.location.href.substring(0,window.location.href.indexOf('search')+6)+""+this._search;
        // console.log(window.location.href.substring(0,window.location.href.indexOf('search')+6));
      }else{
        this.router.navigate(['/search',this._search]);
        this._search="";
      }
    }
  }
}
