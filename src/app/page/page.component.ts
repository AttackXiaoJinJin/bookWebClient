import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  //总页数
  @Input()pages: number;
  pagelist: any = [];
  //当前页数是 1
  curpage: number = 1;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentChecked(){
    this.pagelist=[];
    // console.log(this.pages+">>>>>>>>>page");
    //进行分页，比如1,2,3,4,5,6
    //i从1开始
    for(let i=1;i<=this.pages;i++){
      //下标从0开始
      this.pagelist[i-1]=i;
    }
  }
  //获取当前页数
  getCurPage(page){
    this.curpage = page;
  }
  //向后翻页
  nextPage(){
    //当前页数小于总页数
    //不写=，因为小于，+1就是=了
    if(this.curpage<this.pages){
      this.curpage +=1;
    }
  }
  prevPage(){
    //当前页数大于第一页
    if(this.curpage>1){
      this.curpage -=1;
    }
  }
}
