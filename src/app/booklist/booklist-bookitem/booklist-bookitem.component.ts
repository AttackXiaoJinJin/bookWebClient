import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booklist-bookitem',
  templateUrl: './booklist-bookitem.component.html',
  styleUrls: ['./booklist-bookitem.component.css']
})
export class BooklistBookitemComponent implements OnInit {
  @Input() _book:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  toBookDetail() {
    this.router.navigate(['/bookdetail']);
  }
}
