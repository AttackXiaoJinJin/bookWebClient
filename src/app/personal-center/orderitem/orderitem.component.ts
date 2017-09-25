import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderitemComponent implements OnInit {
  @Input() _order:any;
  @Output() delOrder = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  del(order_id){
    this.delOrder.emit(order_id);
  }
}
