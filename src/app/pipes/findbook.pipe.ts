import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findbook'
})
export class FindbookPipe implements PipeTransform {

  transform(books: any, args?: any): any {
    if (args[0] && args[1]) {
      var new_books = books.filter(function (book, index) {
        if (book.type.indexOf(args[0]) != -1 || book.type.indexOf(args[1]) != -1) {
          return book;
        }
      });
      return new_books;
    }else if (args[0] && !args[1]) {
      var new_books = books.filter(function (book, index) {
        if (book.type.indexOf(args[0]) != -1) {
          return book;
        }
      });
      return new_books;
    }else {
      return books;
    }
  }
}
