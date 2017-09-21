import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articleitem',
  templateUrl: './articleitem.component.html',
  styleUrls: ['./articleitem.component.css']
})
export class ArticleitemComponent implements OnInit {
  @Input() _article: any;
  constructor() { }

  ngOnInit() {
  }

}
