import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css'],
  providers:[ArticlesService]
})
export class ArticledetailComponent implements OnInit {
  article:any;
  constructor(private artSer:ArticlesService) { }

  ngOnInit() {
    //====================下面获取文章

    let that=this;
    that.artSer.getArticleDetail(8,function (result) {
      that.article=result;
      console.log(result[0][0].article_content+"这是获取文章");
    })

  }




}
