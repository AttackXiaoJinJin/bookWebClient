import { Component, OnInit, Input } from '@angular/core';
import {BooksService} from  "../../services/books.service";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
@Component({
  selector: 'app-everybook',
  templateUrl: './everybook.component.html',
  styleUrls: ['./everybook.component.css'],
  providers:[BooksService]
})
export class EverybookComponent implements OnInit {
  @Input()every_books: any;
  @Input()every_topics: any;
  currentPic = 0;
  books: any;
  constructor(
    private bookSer: BooksService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {
    setInterval(() => {
      let id = (this.currentPic + 1) % 5;
      this.currentPic = id;
    }, 3000);
  }
  ngOnInit() {
    let that=this;
    // //通过服务获取喜欢最多的书籍
    that.bookSer.mostcombooks(function (result) {
      that.books=result;
      // console.log(JSON.stringify(result)+"这是所有的推荐书");
    })
  }
  toTopic() {
    this.router.navigate(['/topic']);
  }
  toTopicDetail(topic_id){
    this.router.navigate(['/topicdetail',topic_id]);
  }

  toBookDetail(book_id) {
    this.router.navigate(['/bookdetail',book_id]);
  }

  toBooklist() {
    this.router.navigate(['/booklist']);
  }

}
