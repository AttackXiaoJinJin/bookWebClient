import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ShortsService} from "../services/shorts.service";
@Component({
  selector: 'app-shortdetail',
  templateUrl: './shortdetail.component.html',
  styleUrls: ['./shortdetail.component.css'],
  providers:[ShortsService]
})
export class ShortdetailComponent implements OnInit {
  short_id:any;
  _short: any;
  like_num:any;
  dislike_num:any;
  zan_if:any=false;
  cai_if:any=false;
  modal_if: boolean=false;
  scrollTop: any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private ShortsService:ShortsService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.short_id = this.route.snapshot.paramMap.get('short_id');
    let str = '{"short_id":'+ this.short_id +'}';
    let short_id = JSON.parse(str);
    let that=this;
    that.ShortsService.getShortDetail(short_id,function (result) {
      // console.log(result);
      if (result.statusCode) {
        that.router.navigate(['/**']);
      }else {
        that._short = result;
        that.like_num = result.like_num;
        that.dislike_num = result.dislike_num;
      }
    });
  }
  togetuserid(userid){
    this.router.navigate(['/personaldetail',userid]);
  }
  zan(short_id){
    if(sessionStorage.getItem('user_id')){
      if(!this.zan_if){
        let str = '{"short_id":'+ short_id +'}';
        let short = JSON.parse(str);
        let that=this;
        that.ShortsService.likeShort(short,function (result) {
          // console.log(result);
          if (result.statusCode==112) {
            that.zan_if = true;
            that.like_num+=1;
          }
        });
      }
    }else{
      this.login_if()
    }
  }
  cai(short_id){
    if(sessionStorage.getItem('user_id')){
      if(!this.cai_if){
        let str = '{"short_id":'+ short_id +'}';
        let short = JSON.parse(str);
        let that=this;
        that.ShortsService.dislikeShort(short,function (result) {
          // console.log(result);
          if (result.statusCode==114) {
            that.cai_if = true;
            that.dislike_num+=1;
          }
        });
      }
    }else {
      this.login_if()
    }
  }
  close(){
    this.modal_if = false;
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
  login_if(){
    this.scrollTop = window.scrollY+"px";
    this.modal_if = true;
  }
}
