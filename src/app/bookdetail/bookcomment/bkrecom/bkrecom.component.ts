import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bkrecom',
  templateUrl: './bkrecom.component.html',
  styleUrls: ['./bkrecom.component.css']
})
export class BkrecomComponent implements OnInit {
  @Input() _recomment: any;
  @Input() mainname: any;
  @Input() mainid: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }
//====================init
  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }

}
//=============big
