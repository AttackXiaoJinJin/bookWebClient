import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() _address:any;
  @Output() delAddress = new EventEmitter();
  constructor(
  ) { }

  ngOnInit() {
  }
  del(receive_id) {
    this.delAddress.emit(receive_id);
  }
}
