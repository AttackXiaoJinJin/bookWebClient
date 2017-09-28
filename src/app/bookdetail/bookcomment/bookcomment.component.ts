import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookcomment',
  templateUrl: './bookcomment.component.html',
  styleUrls: ['./bookcomment.component.css'],
  providers: [ CommentsService ]
})
export class BookcommentComponent implements OnInit {
  @Input() _comment: any;
  like_num:any;
  like_if:boolean=false;
  constructor(
    private router: Router,
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
        }else {

        }
      });
    }
  }
  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }
}
