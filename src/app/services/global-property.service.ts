import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  //默认为false
  hiddenNavs=false;
  bookcount=0;
  constructor() { }

}
