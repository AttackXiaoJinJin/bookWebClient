import { Component, OnInit,Input } from '@angular/core';
import { ReceiveService } from './../services/receive.service';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [ ReceiveService ]
})
export class PersonalInformationComponent implements OnInit {
  @Input() user:any;
  add_if:boolean=false;
  _addresses:any;
  receive_name:any;
  receive_phone:any;
  receive_address:any;
  constructor(
    private ReceiveService: ReceiveService,
  ) { }

  ngOnInit() {
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str);
    let that=this;
    that.ReceiveService.showAddress(user_id, function (result) {
      if(!result.statusCode) {
        that._addresses = result;
      }
      // console.log(that._user);
    });
  }
  showadd(){
    this.add_if=true;
  }
  addAddress(){
    let str = '{"user_id":' + sessionStorage.getItem('user_id') + ',"receive_name":"'+this.receive_name+'","receive_address":"'+this.receive_address+'","receive_phone":"'+this.receive_phone+'"}';
    let address = JSON.parse(str);
    let that=this;
    that.ReceiveService.addAddress(address, function (result) {
      if(result.statusCode==103) {
        that.ReceiveService.showAddress(address, function (result) {
          if(!result.statusCode) {
            that._addresses = result;
          }
          // console.log(that._user);
        });
        that.add_if=false;
        that.receive_name="";
        that.receive_phone="";
        that.receive_address="";
      }
    });
  }
  delAddress(receive_id){
    let str = '{"receive_id":' + receive_id + '}';
    let address = JSON.parse(str);
    let str2 = '{"user_id":' + sessionStorage.getItem('user_id') + '}';
    let user_id = JSON.parse(str2);
    let that=this;
    that.ReceiveService.delAddress(address, function (result) {
      // console.log(result.statusCode);
      if(result.statusCode==101) {
        that.ReceiveService.showAddress(user_id, function (result) {
          if(!result.statusCode) {
            that._addresses = result;
          }
          // console.log(that._addresses);
        });
      }
    });
  }
}
