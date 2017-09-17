import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findArticle'
})
export class FindArticlePipe implements PipeTransform {

  transform(articles: any, args?: any): any {
    var new_articles = articles.filter(function (article, index) {
      if (article.type.indexOf(args) != -1) {
        return article;
      }
    });
    return new_articles;
  }
}
