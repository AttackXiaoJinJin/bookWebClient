import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  _username:string;
  _username_error:string;
  _password:string;
  _confirm_password:string;
  constructor(
    private  glo:GlobalPropertyService,
    private router:Router
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
}
