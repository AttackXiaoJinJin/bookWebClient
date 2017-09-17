import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  toPay() {
    this.router.navigate(['/pay']);
  }
}
