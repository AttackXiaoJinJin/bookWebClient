import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-everybook',
  templateUrl: './everybook.component.html',
  styleUrls: ['./everybook.component.css']
})
export class EverybookComponent implements OnInit {
  @Input()every_books: any;
  @Input()every_topics: any;
  currentPic = 0;
  constructor(
    private router:Router
  ) {
    setInterval(() => {
      let id = (this.currentPic + 1) % 5;
      this.currentPic = id;
    }, 3000);
  }
  ngOnInit() {
  }
  toTopic() {
    this.router.navigate(['/topic']);
  }
  toTopicDetail(topic_id){
    console.log(topic_id);
  }
}
