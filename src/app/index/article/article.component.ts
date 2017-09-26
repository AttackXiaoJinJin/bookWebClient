import { Component, OnInit } from '@angular/core';
// 导入服务
import {ArticlesService} from '../../services/articles.service';
import {Router, ActivatedRoute, ParamMap} from  '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // 注册服务
  providers: [ArticlesService]
})
export class ArticleComponent implements OnInit {
  // 绑定变量
  articles: any;

  constructor(
    // 声明变量
    private articleSer: ArticlesService,
    private router: Router,
    private aroute: ActivatedRoute) {

  }

  ngOnInit() {
    let that = this;
    that.articleSer.getAllArticles(function (result) {
      // 得到的是一个二维数组
      that.articles = result[0];
      // console.log(JSON.stringify(result) + " 这是所有的推荐文章 ");
      console.log(JSON.stringify(result[0]) + " 这是所有的推荐文章 ");
    });

  }

  toArticleDetail(article_id) {
    this.router.navigate(['/articledetail',article_id]);
  }
  togetuserid(userid) {
    this.router.navigate(['/personaldetail',userid]);
  }
}
