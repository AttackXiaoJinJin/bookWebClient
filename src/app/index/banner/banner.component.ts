import { Component, OnInit } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  // styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig]

})
export class BannerComponent{

 constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
     config.keyboard = false;
  }}


