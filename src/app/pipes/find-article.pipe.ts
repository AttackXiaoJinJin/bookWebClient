import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findArticle'
})
export class FindArticlePipe implements PipeTransform {

  transform(articles: any, args?: any): any {
    if(articles){
      var new_articles = articles.filter(function (article, index) {
        if (article.topic_name.indexOf(args) != -1) {
          return article;
        }
      });
      return new_articles;
    }
  }
}
