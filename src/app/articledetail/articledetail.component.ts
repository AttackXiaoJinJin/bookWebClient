import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css'],
  providers:[ArticlesService,CommentsService]
})
export class ArticledetailComponent implements OnInit {
  article:any;
  id: any;
  comments: any;
  comment_if: boolean;
  modal_if: boolean=false;
  articlecomment: any;

  constructor(private artSer:ArticlesService,
              private route:ActivatedRoute,
              private router:Router,
              private CommentsService:CommentsService,
              ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('article_id');
    let that=this;
    //====================下面获取文章
    that.artSer.getArticleDetail(that.id+'',function (result) {
      //console.log(result[0][0]+"这是result00");
      if(result[0][0].statusCode){
        console.log(result[0][0].statusCode+"这是statusCode");
        that.router.navigate(['/**']);
      }else {
        that.article=result[0][0];

      }
    })

  }




}
