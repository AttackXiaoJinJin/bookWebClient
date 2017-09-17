/**
 * Created by Fox on 2017/9/5.
 */
import Mock from 'mockjs';

var Random = Mock.Random;

export var bookShops = ['三联书店', '理想国', '中华书局', '悦读纪', '磨铁图书', '中信出版'];
export var bookTypes = ['小说/科幻', '小说/玄幻', '小说/青春', '文学艺术/古典', '文学艺术/外国', '人文社科/历史', '人文社科/人物传记', '品质生活/美食', '品质生活/健康养生', '成功励志/职场', '成功励志/情商'];
export var articleTypes = ['小说', '文学艺术', '人文社科', '生活', '成功励志'];

Random.extend({
  shops: function() {
    return this.pick(bookShops);
  },

  bookTypes:function() {
    return this.pick(bookTypes);
  },
  authornames: function() {
    var name = ['司马懿', '诸葛亮','曹操','刘备','司马光'];
    return this.pick(name);
  },
  bookIcons: function() {
    var imgs = ['book01.jpg', 'book02.jpg', 'book03.jpg'];
    return this.pick(imgs);
  },
  articleTypes:function() {
    return this.pick(articleTypes);
  },
  topicIcons:function () {
    var imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
    return this.pick(imgs);
  }
});


Random.authornames();
Random.bookIcons();
Random.shops();
Random.bookTypes();
Random.articleTypes();
Random.topicIcons();

export var books=Mock.mock({
  'data|200':[{
    "id": 'book_' + '@integer(1, 100)',
    "name": "@cword(2,10)",
    "author": '@authornames',
    'bookShop':'@shops',
    'type':'@bookTypes',
    "price|1-100.2": 1,
    "publish_date": Random.date('yyyy-MM-dd'),
    "comments_acount|10000-100000": 1,
    "sall_type|1-10": 1,
    "icon": "@bookIcons",
    "count|1-100": 1,
    "isSelected": Random.boolean(2, 8, true), //指示参数 current 的相反值 !current 出现的概率。概率计算公式为 max / (min + max)。该参数的默认值为 1，即有 50% 的概率返回参数 !current。
    "comments": "@cparagraph(2, 7)"
  }]
});

export var articles=Mock.mock({
  'data|100':[{
    "id": 'article_' + '@integer(1, 100)',
    "name": "@cword(10,20)",
    "user": '@cword(2,8)',
    'type':'@articleTypes',
    "publish_date": Random.datetime(),
    "comments_acount|10000-100000": 1,
    "loves_acount|10000-100000": 1,
    "icon": "user_icon.jpg",
    "comments": "@cparagraph(3, 10)"
  }]
});

export var topics=Mock.mock({
  'datas|30':[{
    "id": 'book_' + '@integer(1, 100)',
    "name": "@cword(2,7)",
    "article_acount|0-10000":1,
    "comments_acount|10000-100000": 1,
    "icon": '@topicIcons',
    "comments": "@cparagraph(2, 7)"
  }]
});
