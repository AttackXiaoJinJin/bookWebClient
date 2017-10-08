import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderitemComponent implements OnInit {
  @Input() _order:any;
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  refunddetail(order_id){
    this.router.navigate(['refunddetail',order_id]);
  }
}
