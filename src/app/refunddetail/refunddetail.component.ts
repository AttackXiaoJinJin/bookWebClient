import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {OrdersService} from "../services/orders.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-refunddetail',
  templateUrl: './refunddetail.component.html',
  styleUrls: ['./refunddetail.component.css'],
  providers:[OrdersService]
})
export class RefunddetailComponent implements OnInit {
  id:any;
  _refund:any;
  scrollTop: any;
  full_height:any;
  modal_if: boolean=false;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private  OrdersService:OrdersService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let id = this.route.snapshot.paramMap.get('order_id');
    let str='{"order_id":'+id+'}';
    let order_id=JSON.parse(str);
    let that=this;
    that.OrdersService.showorderbyid(order_id,function (result) {
       that._refund=result[0];

    })
  }
  submit(order_id){
    this.scrollTop = window.scrollY+"px";
    this.full_height=document.body.offsetHeight +"px";
    this.modal_if=true;
    this.id=order_id;
  }
  close(){
    this.modal_if = false;
  }
  define(){
    let order_id=this.id;
    let str = '{"order_id":' + order_id + '}';
    let order = JSON.parse(str);
    let that=this;
    that.OrdersService.delOrder(order,function (result) {
      if(result.statusCode==93){
        // console.log("删除订单成功");
        that.router.navigate(['personal-center',5]);
      }
      else {
        alert("删除不成功");
      }
    })
  }
  cancel(){
    this.modal_if=false
  }
}
