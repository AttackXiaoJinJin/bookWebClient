import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user_id:any;
  isLogin:boolean = false;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('user_id')){
      this.user_id = sessionStorage.getItem('user_id');
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }

}
