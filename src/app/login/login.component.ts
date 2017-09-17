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
    this.glo.hiddenNavs = true;
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
  toLogin(login_form){
    let that=this;
    that.userSer.login(login_form.form.value,function (result) {

      if(result.stateCode==1){
        that.router.navigate(['/index']);
        alert(result.stateCode+"登录成功");
      }else {
        alert(result.stateCode);
        that.login_res='用户名或密码错误';
      }
    });
  }
  toIndex() {
    this.router.navigate(['/index']);
  }
}
