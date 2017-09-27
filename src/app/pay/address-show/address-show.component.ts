import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { GlobalPropertyService } from './../../services/global-property.service';

@Component({
  selector: 'app-address-show',
  templateUrl: './address-show.component.html',
  styleUrls: ['./address-show.component.css']
})
export class AddressShowComponent implements OnInit {

  @Input() _address:any;
  @Output() checkAddress = new EventEmitter();
  check_receive_id:any;
  constructor(
    private  glo:GlobalPropertyService,
  ) { }

  ngOnInit() {
  }
  ngAfterContentChecked(){
    this.check_receive_id=this.glo.receive_id;
  }
  check(){
    this.checkAddress.emit(true);
  }
}
