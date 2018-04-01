import { Component, OnInit,Input } from '@angular/core';
import { ReceiveService } from './../services/receive.service';
import {UsersService} from "../services/users.service";
declare var $:any;
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [ ReceiveService,UsersService ]
})
export class PersonalInformationComponent implements OnInit {
  @Input() user:any;
  add_if:boolean=false;
  _addresses:any;
  classname:any;
  _modifyintro:any;
  receive_name:any;
  receive_phone:any;
  receive_address:any;
  receive_name_error:string;
  address_info:any = {'江苏省':['苏州市','南通市','无锡市','南京市','常州市'],'上海市':['虹桥区','浦东区'],'浙江省':['金华市','宁波市','杭州市'],};
  selProvince:any;
  selCity:any;
  userId:any;
  constructor(
    private ReceiveService: ReceiveService,
    private UsersService:UsersService,
  ) { }

  ngOnInit() {

    $("#text").css('border', 'none');
    this.classname="touxiangbtn"
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    this.userId=sessionStorage.getItem('user_id');
    let that=this;
    that.ReceiveService.showAddress(user_id, function (result) {
      if(!result.statusCode) {
        that._addresses = result;
      }
      // console.log(that._user);
    });
    this.selProvince = $('#selProvince');
    this.selCity = $('#selCity');
    that.UsersService.getBaseById(user_id,function (result) {
      that._modifyintro=result[0].user_introduction;
    })
  }
//保存个人简介
  saveintro(){
      $("#text").css('border', 'none');
      this.classname="touxiangbtn active"
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that=this;
    that.UsersService.getBaseById(user_id,function (result) {
      that._modifyintro=result[0].user_introduction;
    })
  }
  //修改个人简介
  modifyintro(){
    $("#text").css('border', '1px');

    let that=this;
    that.UsersService.modifyintro(this.userId+'',that._modifyintro+'',function (result) {
     console.log(result.statusCode);
     if(result.statusCode==129){
       that.saveintro();
     }

   })
  }
  txt(){
    this.classname="touxiangbtn";
  }
  showadd(){
    this.add_if=true;

    this.selProvince[0].options.length = 0; //清空现有城市数据
    this.selCity[0].options.length = 0; //清空现有城市数据
    for(var Key in this.address_info){
      var option = new Option(Key, Key);//(text,value)
      this.selProvince[0].options.add(option);
    }
    //初始的时候有第一个省份的City
    for(let cityIndex = 0; cityIndex <  this.address_info[this.selProvince[0].value].length; cityIndex ++){
      var city = this.address_info[this.selProvince[0].value][cityIndex];
      var option02 = new Option(city,city);
      this.selCity[0].options.add(option02);
    }
  }

  addAddress(){
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + ',"receive_name":"'+this.receive_name+'","receive_address":"'+this.selProvince[0].value+this.selCity[0].value+this.receive_address+'","receive_phone":"'+this.receive_phone+'"}';
    let address = JSON.parse(str)
    let that=this;
    that.ReceiveService.addAddress(address, function (result) {
      if(result.statusCode==103) {
        that.ReceiveService.showAddress(address, function (result) {
          if(!result.statusCode) {
            that._addresses = result
          }
          // console.log(that._user);
        })
        that.add_if=false
        that.receive_name=""
        that.receive_phone=""
        that.receive_address=""
      }
    })
  }

  delAddress(receive_id){
    let str = '{"receive_id":' + receive_id + '}';
    let address = JSON.parse(str);
    let str2 = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str2);
    let that=this;
    that.ReceiveService.delAddress(address, function (result) {
      // console.log(result.statusCode);
      if(result.statusCode==101) { //删除收货地址成功
        that.ReceiveService.showAddress(user_id, function (result) {

          if(!result.statusCode) { //fang返回undefined则结果就是fale
            that._addresses = result;
            // console.log("H__");
            // console.log(result);
          }else{
            that._addresses = [];
          }
          // console.log(that._addresses);
        });
      }
    });
  }

  showCitys(){
    this.selCity[0].options.length = 0; //清空现有城市数据
    for(let cityIndex = 0; cityIndex <  this.address_info[this.selProvince[0].value].length; cityIndex ++){
      var city = this.address_info[this.selProvince[0].value][cityIndex];
      var option02 = new Option(city,city);
      this.selCity[0].options.add(option02);
    }
  }

  receivenameCheck(){
    if(this.receive_name){
      var reg = new RegExp("[\\u4E00-\\u9FFF]","g");
      if(this.receive_name.length>=2 && this.receive_name.length<=4 && this.receive_name.match(reg)){
        return false;
      }else {
        this.receive_name_error = '请填写真实姓名';
        return true;
      }
    }else{
      this.receive_name_error = '收件人不能为空';
      return true;
    }
  }
}
