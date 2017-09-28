import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
@Component({
  selector: 'app-bookcomment',
  templateUrl: './bookcomment.component.html',
  styleUrls: ['./bookcomment.component.css'],
  providers: [ CommentsService ]
})
export class BookcommentComponent implements OnInit {
  @Input() _comment: any;
  @Output() login_if = new EventEmitter();
  like_num:any;
  like_if:boolean=false;
  constructor(
    private CommentsService:CommentsService,
  ) { }

  ngOnInit() {
    this.like_num=this._comment.like_num
  }
  bookcomlike(){
    if(sessionStorage.getItem('user_id') && !this.like_if){
      let str = '{"bookcom_id":'+ this._comment.bookcom_id +'}';
      let bookcom_id = JSON.parse(str);
      let that=this;

      that.CommentsService.bookComLike(bookcom_id,function (result) {
        console.log(result);
        if (result.statusCode==32) {
          that.like_if = true;
          that.like_num+=1;
        }
      });
    }else{
      this.login_if.emit(true);
    }
  }
}
