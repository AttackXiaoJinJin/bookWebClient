import { Component, OnInit } from '@angular/core';
import { books } from './../datas/datas';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  _books: any;
  sortText: string;
  sortText2: string;
  constructor() { }

  ngOnInit() {
    this._books = books.data;
  }
  sort(str, str2) {
    this.sortText = str;
    this.sortText2 = str2;
  }
}
