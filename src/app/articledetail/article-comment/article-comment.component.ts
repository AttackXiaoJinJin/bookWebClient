import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css'],
  providers:[CommentsService]
})
export class ArticleCommentComponent implements OnInit {

  @Input() _comment: any;
  like_num:any;
  like_if:boolean=false;
  constructor(
    private router: Router,
    private comSer:CommentsService) { }

  ngOnInit() {
    this.like_num=this._comment.like_num;

  }

  articlecomlike(){
    if(sessionStorage.getItem('user_id') && !this.like_if){
      var articlecom_id=this._comment.articlecom_id;
      // console.log(this._comment.articlecom_id+"该评论的id==============");
      let that=this;
      that.comSer.articleComLike(articlecom_id+'',function (result) {
        if (result.statusCode==35) {
          that.like_if = true;
          that.like_num+=1;

        }else {
        }
      });
    }
  }

  togetuserid(user_id){
    this.router.navigate(['/personaldetail',user_id]);
  }
}
