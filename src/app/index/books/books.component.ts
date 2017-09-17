import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 books=[
   {'img':'../../../assets/img/book5.jpg','booksname':'私语书','author':'黎歌','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book4.jpg','booksname':'故宫日历','author':'陈丽华/冯何俊','bookpubtime':'2017-01-29','book_commetcount':'226'},

   {'img':'../../../assets/img/book5.jpg','booksname':'私语书','author':'黎歌','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'私语书','author':'黎歌','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'私语书','author':'黎歌','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book1.jpg','booksname':'行走的人生','author':'俞敏洪','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book1.jpg','booksname':'行走的人生','author':'俞敏洪','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book1.jpg','booksname':'行走的人生','author':'俞敏洪','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book2.jpg','booksname':'新物种爆炸','author':'吴生','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'暗夜行路','author':'志贺直哉','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book3.jpg','booksname':'有毒的逻辑','author':'罗伯塔古拉','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'暗夜行路','author':'志贺直哉','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'暗夜行路','author':'志贺直哉','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book5.jpg','booksname':'暗夜行路','author':'志贺直哉','bookpubtime':'2017-01-29','book_commetcount':'226'},
   {'img':'../../../assets/img/book6.jpg','booksname':'达利','author':'[法] 埃德蒙·波顿'},
   {'img':'../../../assets/img/book7.jpg','booksname':'羊与钢的森林','author':'[日] 宫下奈都'},
 ]
  constructor() { }

  ngOnInit() {
  }

}
