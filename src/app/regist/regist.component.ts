import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
// import { LocalStorage } from '../services/localStorage.service';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  providers:[UsersService]
})
export class RegistComponent implements OnInit {
  _username:string;
  _username_error:string;
  _password:string;
  _confirm_password:string;
  regist_res_if:boolean;
  regist_res:string;
  constructor(
    private glo:GlobalPropertyService,
    private router:Router,
    private userSer:UsersService,
    // private localstorage:LocalStorage
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs = true;
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
  passwordCheck(){
    if(this._password && this._password.length<=20 && this._password.length>=6){
      if(this._password == this._confirm_password){
        return false;
      }
      else {
        return true;
      }
    }else{
      return false;
    }
  }
  usernameCheck(){
    if(this._username){
      let length = this.getUTFCodeNum(this._username);
      if(length>=4 && length<=16){
        return false;
      }else {
        this._username_error = '用户名(2-8个汉字/4-16个字符)';
        return true;
      }
    }else{
      this._username_error = '用户名不能为空';
      return true;
    }
  }
  getUTFCodeNum(str) {
    var reg = new RegExp("[\\u4E00-\\u9FFF]","g");
    if(str.match(reg)){
      var newStr = str.replace(reg,'aa');
      return newStr.length;
    }else{
      return str.length;
    }
  }
  toIndex() {
    this.router.navigate(['/index']);
  }
  toRegist(regist_form) {
    let that=this;
    that.userSer.addUser(regist_form.form.value,function (result) {
      switch (result.statusCode){
        case 6:
          sessionStorage.setItem('telephone', regist_form.form.value.registPhone);
          // that.localstorage.set('token',result.token);
          that.regist_res_if=true;
          that.regist_res = '登录成功';
          that.router.navigate(['/index']);
          break;
        case 5:
          that.regist_res_if=true;
          that.regist_res='该用户已存在';
          break;
        default:
          that.router.navigate(['/**']);
          break;
      }
    });
  }
}
