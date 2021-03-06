import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { ArticlesService } from '../services/articles.service';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [ BooksService, ArticlesService, TopicService ]
})
export class FindComponent implements OnInit {
  _books: any;
  _articles: any;
  _topics: any;


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
    private router:Router,
    private BooksService:BooksService,
    private ArticlesService:ArticlesService,
    private TopicService:TopicService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let that=this;
    that.BooksService.getAllBooks(function (result) {
      if(result.statusCode){
        that.router.navigate(['/**']);
      }else{
        that._books = result;
      }
    });

    that.ArticlesService.getAllArticles(function (result) {
      if(result.statusCode){
        that.router.navigate(['/**']);
      }else{
        that._articles = result[0];
      }
    });

    that.TopicService.getAllTopic(function (result) {
      // console.log(result[0]);
      if(result.statusCode){
        that.router.navigate(['/**']);
      }else{
        that._topics = result[0];
      }
    });
  }
  //筛选分类
  sort(str) {
    //五个大分类不相互影响，所以设了5个变量
    if(str.indexOf('小说') != -1) {
      this.sortText1 = str;//小说存在，则变化第一个大分类
    }else if(str.indexOf('文学艺术') != -1) {
      this.sortText2 = str;//变化第二个大分类
    }else if(str.indexOf('人文社科') != -1) {
      this.sortText3 = str;//变化第三个大分类
    }else if(str.indexOf('品质生活') != -1) {
      this.sortText4 = str;//变化第四个大分类
    }else {
      this.sortText5 = str;//变化第五个大分类
    }
  }
  //小分类选中的时背景变色改变
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
