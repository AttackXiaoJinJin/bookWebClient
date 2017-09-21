import { Pipe, PipeTransform } from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
@Pipe({
  name: 'findbook'
})
export class FindbookPipe implements PipeTransform {
  constructor(
    private  glo:GlobalPropertyService,
  ) { }

  transform(books: any, args?: any): any {
    if (books) {
      if (args[0] && args[1]) {
        var new_books = books.filter(function (book, index) {
          if (book.book_tag.indexOf(args[0]) != -1 || book.book_tag.indexOf(args[1]) != -1) {
            return book;
          }
        });
        this.glo.bookcount = new_books.length;
        return new_books;
      } else if (args[0] && !args[1]) {
        var new_books = books.filter(function (book, index) {
          if (book.book_tag.indexOf(args[0]) != -1) {
            return book;
          }
        });
        this.glo.bookcount = new_books.length;
        return new_books;
      } else {
        this.glo.bookcount = books.length;
        return books;
      }
    }
  }
}
