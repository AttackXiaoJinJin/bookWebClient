import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  touxiang=[
    {'img':'../../../assets/img/touxiang1.jpg','author':'小多爱吐槽','time':'2017-06-07',
      'biaoti':'如何轻松写作，让爱好变现','duanluo':'写作是上帝赐予我们的救赎之道，也是没有失败的一项投资，有百益而无一害互联网时代，写作是为自己打造个人品牌的最好方式，是一种高效社交，更是种很好的第二职业，不受时间空间限制，不分男女老少。﻿',
    'fenlei':'小说','commment':'269','shoucang':'789','articleimg':"../../../assets/img/article1.jpg"},
    {'img':'../../../assets/img/touxiang3.jpg','author':'黑眼豆豆写字的地方 ','time':'5小时前',
      'biaoti':'有多少人，最后嫁给了高中同学？','duanluo':'我们总以为来日方长，可一不小心就是后会无期。年轻时候的爱情，太过怯懦，又太过冲动要么畏畏缩缩藏在角落不见天日，要么轰轰烈烈不撞南墙不回头没有相爱的方法，只能小心翼翼摸索，在爱的误区里一去不',
      'fenlei':'世间事','commment':'762','shoucang':'642','articleimg':"../../../assets/img/article3.jpg"},
    {'img':'../../../assets/img/touxiang2.jpg','author':'水中沚 ','time':'09.08 13:03',
      'biaoti':'为什么马云、陈大年都在推崇“懒文化”？','duanluo':'在大多数人眼里，“懒”似乎一直是个贬义词，它代表着“不勤奋”、“不上进”，还可能将“一事无成”。所以，很多人都羞于做一个会偷懒的人。女人羞于偷懒，于是任劳任怨的打理家务、照顾孩子，一门心思为家庭付出﻿',
      'fenlei':'散文','commment':'469','shoucang':'799','articleimg':"../../../assets/img/article2.jpg"},
    {'img':'../../../assets/img/touxiang3.jpg','author':'黑眼豆豆写字的地方 ','time':'5小时前',
      'biaoti':'有多少人，最后嫁给了高中同学？','duanluo':'我们总以为来日方长，可一不小心就是后会无期。年轻时候的爱情，太过怯懦，又太过冲动要么畏畏缩缩藏在角落不见天日，要么轰轰烈烈不撞南墙不回头没有相爱的方法，只能小心翼翼摸索，在爱的误区里一去不',
      'fenlei':'世间事','commment':'762','shoucang':'642','articleimg':"../../../assets/img/article3.jpg"},
    {'img':'../../../assets/img/touxiang1.jpg','author':'小多爱吐槽','time':'2017-06-07',
      'biaoti':'如何轻松写作，让爱好变现','duanluo':'写作是上帝赐予我们的救赎之道，也是没有失败的一项投资，有百益而无一害互联网时代，写作是为自己打造个人品牌的最好方式，是一种高效社交，更是种很好的第二职业，不受时间空间限制，不分男女老少。﻿',
      'fenlei':'小说','commment':'269','shoucang':'789','articleimg':"../../../assets/img/article1.jpg"},
    {'img':'../../../assets/img/touxiang3.jpg','author':'黑眼豆豆写字的地方 ','time':'5小时前',
      'biaoti':'有多少人，最后嫁给了高中同学？','duanluo':'我们总以为来日方长，可一不小心就是后会无期。年轻时候的爱情，太过怯懦，又太过冲动要么畏畏缩缩藏在角落不见天日，要么轰轰烈烈不撞南墙不回头没有相爱的方法，只能小心翼翼摸索，在爱的误区里一去不',
      'fenlei':'世间事','commment':'762','shoucang':'642','articleimg':"../../../assets/img/article3.jpg"},
    {'img':'../../../assets/img/touxiang1.jpg','author':'小多爱吐槽','time':'2017-06-07',
      'biaoti':'如何轻松写作，让爱好变现','duanluo':'写作是上帝赐予我们的救赎之道，也是没有失败的一项投资，有百益而无一害互联网时代，写作是为自己打造个人品牌的最好方式，是一种高效社交，更是种很好的第二职业，不受时间空间限制，不分男女老少。﻿',
      'fenlei':'小说','commment':'269','shoucang':'789','articleimg':"../../../assets/img/article1.jpg"},
    {'img':'../../../assets/img/touxiang3.jpg','author':'黑眼豆豆写字的地方 ','time':'5小时前',
      'biaoti':'有多少人，最后嫁给了高中同学？','duanluo':'我们总以为来日方长，可一不小心就是后会无期。年轻时候的爱情，太过怯懦，又太过冲动要么畏畏缩缩藏在角落不见天日，要么轰轰烈烈不撞南墙不回头没有相爱的方法，只能小心翼翼摸索，在爱的误区里一去不',
      'fenlei':'世间事','commment':'762','shoucang':'642','articleimg':"../../../assets/img/article3.jpg"},
    {'img':'../../../assets/img/touxiang3.jpg','author':'黑眼豆豆写字的地方 ','time':'5小时前',
      'biaoti':'有多少人，最后嫁给了高中同学？','duanluo':'我们总以为来日方长，可一不小心就是后会无期。年轻时候的爱情，太过怯懦，又太过冲动要么畏畏缩缩藏在角落不见天日，要么轰轰烈烈不撞南墙不回头没有相爱的方法，只能小心翼翼摸索，在爱的误区里一去不',
      'fenlei':'世间事','commment':'762','shoucang':'642','articleimg':"../../../assets/img/article3.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
