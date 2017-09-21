import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticlesService } from './../services/articles.service';
import { TopicService } from './../services/topic.service';
import { BooksService } from './../services/books.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticlesService, TopicService, BooksService]
})
export class SearchComponent implements OnInit {
  tabs = [{"text":"书籍","img":"books.png"}, {"text":"话题","img":"talk.png"}, {"text":"文章","img":"articles.png"}];
  tab_index = 0;
  searchText: any;
  _articles: any;
  _books: any;
  _topics: any;
  constructor(
    private route: ActivatedRoute,
    private ArticlesService: ArticlesService,
    private TopicService: TopicService,
    private BooksService: BooksService,
  ) { }

  ngOnInit() {
    this.searchText = this.route.snapshot.paramMap.get('search_text');
    console.log(this.searchText);
    let str = '{"searchCon":"' + this.searchText + '"}';
    let searchCon = JSON.parse(str);
    let that = this;
    that.ArticlesService.searchArticle(searchCon, function (result) {
      if (!result.statusCode) {
        that._articles = result[0];
      }
      // console.log(that._articles);
    });
    that.TopicService.searchTopic(searchCon, function (result) {
      if (!result.statusCode) {
        that._topics = result[0];
      }
      // console.log(that._topics);
    });
    that.BooksService.searchBook(searchCon, function (result) {
      if (!result.statusCode) {
        that._books = result[0];
      }
      // console.log(that._topics);
    });
  }
}
