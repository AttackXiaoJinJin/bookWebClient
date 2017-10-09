import { Component, OnInit,Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from  '@angular/router';

@Component({
  selector: 'app-shortcomment',
  templateUrl: './shortcomment.component.html',
  styleUrls: ['./shortcomment.component.css']
})
export class ShortcommentComponent implements OnInit {
  @Input()_shortcomment: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  toshortdetail(id){
    this.router.navigate(['/shortdetail', id]);
    console.log(id);
  }
  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }
}
