import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {
  login_res:string;
  constructor(
    private  glo:GlobalPropertyService,
    private userSer:UsersService,
    private router:Router
  ) { }

  ngOnInit() {
    //在登录界面隐藏导航栏
    this.glo.hiddenNavs = true;
  }
  ngOnDestroy() {
    //离开登录界面显示导航栏
    this.glo.hiddenNavs = false;
  }
  //单例 单一的实例
  toLogin(login_form){
    let that=this;
    that.userSer.login(login_form.form.value,function (result) {
      //如果登录成功
      if(result.statusCode==1){
        //存储token到本地
        //that.localstorage.set("token",result.token);
        //alert("token"+that.localstroage.get("token"));
        that.router.navigate(['/index']);
      }else {
        that.login_res='用户名或密码错误';
      }
    });
  }
  toIndex() {
    this.router.navigate(['/index']);
  }
/*
  getAll(){
    let that=this;
    that.userSer.getAllUsers();
  }
*/
}
