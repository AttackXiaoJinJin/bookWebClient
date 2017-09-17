import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  @Input() _book: any;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  toBookDetail(){
    this.router.navigate(['/bookdetail']);
  }
}
