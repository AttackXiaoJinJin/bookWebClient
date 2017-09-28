import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  //默认为false
  hiddenhot=false;
  hiddenNavs=false;
  hiddenBottom=false;
  bookcount=0;
  receive_id:any;
  constructor() { }

}
