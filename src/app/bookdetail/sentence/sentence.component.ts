import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  @Input()_beauty:any;
  constructor() { }

  ngOnInit() {
  }

}
