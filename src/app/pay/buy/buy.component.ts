import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  ngOnInit() {
  }
  toPaySecond() {
    this.router.navigate(['/paysecond']);
  }
}
