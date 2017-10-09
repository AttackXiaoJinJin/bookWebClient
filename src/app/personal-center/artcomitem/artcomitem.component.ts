import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-artcomitem',
  templateUrl: './artcomitem.component.html',
  styleUrls: ['./artcomitem.component.css'],
  providers: [UsersService]
})
export class ArtcomitemComponent implements OnInit {
  @Input() _artrecomment: any;
  _artcomment: any;
  @Input() mainname: any;
  @Input() mainid: any;
  articlecomId:any;
  constructor(
    private router: Router,
    private usersSer: UsersService,
  ) { }

  ngOnInit() {
    this.articlecomId=this._artrecomment.articlecom_id;
    this.artcomment();
  }

  artcomment(){
    let that=this;
    that.usersSer.userartcom(this.articlecomId+'',function (result) {
      that._artcomment=result;
      // console.log(JSON.stringify(result)+"这是文评")
    });
  }

  togetuserid(user_id) {
    this.router.navigate(['/personaldetail',user_id]);
  }

  toarticle(id){
    this.router.navigate(['/articledetail', id]);
    // console.log(id);
  }

}
