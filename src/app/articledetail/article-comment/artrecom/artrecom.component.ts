import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artrecom',
  templateUrl: './artrecom.component.html',
  styleUrls: ['./artrecom.component.css']
})
export class ArtrecomComponent implements OnInit {
  @Input() _recomment: any;
  @Input() mainname: any;
  @Input() mainid: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }
}
