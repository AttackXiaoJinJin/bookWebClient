import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articleitem',
  templateUrl: './articleitem.component.html',
  styleUrls: ['./articleitem.component.css']
})
export class ArticleitemComponent implements OnInit {
  @Input() _article: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  toarticle(id){
    this.router.navigate(['/articledetail', id]);
    console.log(id);
  }

}
