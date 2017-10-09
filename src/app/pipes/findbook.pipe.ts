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
    //args传过来的参数数组可能是一个也可能是两个
    if (books) {
      if (args[0] && args[1]) {//两个都存在时
        var new_books = books.filter(function (book, index) {
          if (book.book_tag.indexOf(args[0]) != -1 || book.book_tag.indexOf(args[1]) != -1) {
            return book;
          }
        });
        this.glo.bookcount = new_books.length;//将分类筛选还的数组长度存到全局变量中
        return new_books;
      } else if (args[0] && !args[1]) {//一个存在时
        var new_books = books.filter(function (book, index) {
          if (book.book_tag.indexOf(args[0]) != -1) {
            return book;
          }
        });
        this.glo.bookcount = new_books.length;
        return new_books;
      } else {//不存在时
        this.glo.bookcount = books.length;
        return books;
      }
    }
  }
}
