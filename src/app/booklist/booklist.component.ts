import { Component, OnInit, } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [ BooksService ]
})
export class BooklistComponent implements OnInit {
  _books: any;
  _pagesize: number = 15;
  _pages: number;
  sortText: string;
  sortText2: string;
  constructor(
    private router:Router,
    private  glo:GlobalPropertyService,
    private BooksService:BooksService,
  ) { }

  ngOnInit() {
    let that=this;
    that.BooksService.getAllBooks(function (result) {
      if(result.statusCode){
        that.router.navigate(['/**']);
      }else{
        that._books = result;
        that.glo.bookcount = that._books.length;
        that._pages = Math.ceil(this.glo.bookcount / this._pagesize);
      }
    });
  }

  ngAfterContentChecked(){
    console.log(this.glo.bookcount);
    this._pages = Math.ceil(this.glo.bookcount / this._pagesize);
    console.log(this._pages);
  }
  sort(str, str2) {
    this.sortText = str;
    this.sortText2 = str2;
  }
}
