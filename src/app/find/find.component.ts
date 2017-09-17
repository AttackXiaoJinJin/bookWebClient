import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { books } from './../datas/datas';
import { articles } from './../datas/datas';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  _books: any;
  _articles: any;
  sortText1: any;
  sortText2: any;
  sortText3: any;
  sortText4: any;
  sortText5: any;
  index1: any = 1;
  index2: any = 6;
  index3: any = 11;
  index4: any = 16;
  index5: any = 21;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this._books = books.data;
    this._articles = articles.data;
  }
  sort(str) {
    if(str.indexOf('小说') != -1) {
      this.sortText1 = str;
    }else if(str.indexOf('文学艺术') != -1) {
      this.sortText2 = str;
    }else if(str.indexOf('人文社科') != -1) {
      this.sortText3 = str;
    }else if(str.indexOf('品质生活') != -1) {
      this.sortText4 = str;
    }else {
      this.sortText5 = str;
    }
  }
  isActive(index) {
    if (index <= 5) {
      this.index1 = index;
    }else if (index <= 10) {
      this.index2 = index;
    }else if (index <= 15) {
      this.index3 = index;
    }else if (index <= 20) {
      this.index4 = index;
    }else {
      this.index5 = index;
    }
  }
  toBooklist() {
    this.router.navigate(['/booklist']);
  }
}
