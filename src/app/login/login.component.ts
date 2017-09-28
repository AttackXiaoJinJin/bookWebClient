import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
import { LocalStorage } from '../services/localStorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {
  login_res:string;
  login_res_if:boolean=false;
  constructor(
    private  glo:GlobalPropertyService,
    private userSer:UsersService,
    private router:Router,
    private localstorage:LocalStorage
  ) { }

  ngOnInit() {
    //页面加载时
    this.glo.hiddenNavs = true;
    this.glo.hiddenBottom = true;
  }
  ngOnDestroy() {
    //离开页面时
    this.glo.hiddenNavs = false;
    this.glo.hiddenBottom = false;
  }
  toLogin(login_form) {
    let that=this;
    // console.log(login_form.form.value);
    that.userSer.login(login_form.form.value,function (result) {
      if(result.statusCode){
        switch (result.statusCode){
          case 2:
            that.login_res_if=true;
            that.login_res='用户名或密码错误';
            break;
          case 3:
            that.login_res_if=true;
            that.login_res='用户名不存在';
            break;
          default:
            that.router.navigate(['/**']);
            break;
        }
      }else{
        sessionStorage.setItem('user_id', result[0].user_id);
        that.localstorage.set('token',result.token);
        that.router.navigate(['/index']);
      }
    });
  }
  toIndex() {
    this.router.navigate(['/index']);
  }
}
