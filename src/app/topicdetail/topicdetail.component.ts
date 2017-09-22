import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {TopicService} from  "../services/topic.service";
@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css'],
  providers: [TopicService]
})
export class TopicdetailComponent implements OnInit {

  _articles: any;
  _Collectarticles: any;
  _Newarticles: any;
  tabs = ['热门', '推荐', '最新发布'];
  tab_index = 0;
  constructor(
    private route: ActivatedRoute,
    private  article: TopicService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('topic_id');
    const str = '{"topic_id" : ' + id + '}';
    const article = JSON.parse(str);
    const that = this;
    that.article.getHotArticleById(article , function (result) {
      that._articles = result[0];
    });
    that.article.getCollectAritcleByld(article, function (result) {
      that._Collectarticles = result[0];
    });
      that.article.getNewAritcleByld(article , function (result) {
        that._Newarticles = result[0];
      });
  }

}
