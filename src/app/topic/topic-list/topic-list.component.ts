import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Input() _topic:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  toTdetail(id){
    this.router.navigate(['/topicdetail', id]);
  }
}
