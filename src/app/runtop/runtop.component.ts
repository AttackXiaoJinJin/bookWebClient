import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-runtop',
  templateUrl: './runtop.component.html',
  styleUrls: ['./runtop.component.css']
})
export class RuntopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //返回顶部

    $(function(){
      /******** JQuery ********/
      $(window).scroll(function(){
        var Top = $('html').offset().top;
        if($(this).scrollTop() == Top){
          $("a.top").css('visibility', 'hidden');
        }
        else{
          $("a.top").css('visibility', 'visible');
        }
      });
      $("a.top").click(function(){
        $("html,body").animate({scrollTop:0},200);//向上滑动时间
      });
    });
  }
}
