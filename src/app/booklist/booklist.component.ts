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
  //一页显示15本书
  _pagesize: number = 15;
  //页数
  _pages: number;
  sortText: string;
  sortText2: string;
  constructor(
    private router:Router,
    private  glo:GlobalPropertyService,
    private BooksService:BooksService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let that=this;
    that.BooksService.getAllBooks(function (result) {
      if(result.statusCode){
        that.router.navigate(['/**']);
      }else{
        that._books = result;
        //获取书本的总个数
        that.glo.bookcount = that._books.length;
        // console.log(that._books.length+"这是书本个数");
        // console.log(JSON.stringify(that._books)+"这是书本个数");
        //Math.ceil向上取整，比如还多出3本就要多出一页
        that._pages = Math.ceil(this.glo.bookcount / this._pagesize);
      }
    });
  }

  ngAfterContentChecked(){
    // console.log(this.glo.bookcount);
    this._pages = Math.ceil(this.glo.bookcount / this._pagesize);
    // console.log(this._pages);
  }
  sort(str, str2) {
    this.sortText = str;
    this.sortText2 = str2;
  }
}
