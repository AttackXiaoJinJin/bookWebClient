import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookcomment',
  templateUrl: './bookcomment.component.html',
  styleUrls: ['./bookcomment.component.css']
})
export class BookcommentComponent implements OnInit {
  @Input() _comment: any;
  constructor() { }

  ngOnInit() {
  }

}
