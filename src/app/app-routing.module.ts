import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShortpublishComponent } from './shortpublish/shortpublish.component'
import { PersonaldetailComponent } from './personaldetail/personaldetail.component'
import { RefunddetailComponent } from './refunddetail/refunddetail.component'
//chen
import {PersonalCenterComponent} from "./personal-center/personal-center.component";
import {TestpublishComponent} from "./testpublish/testpublish.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import { ShortdetailComponent } from './shortdetail/shortdetail.component'

const routes: Routes = [
  {
    path: 'index',
    //除首页外，其他用懒加载
    component: IndexComponent
  },
  {
    path: 'find',
    loadChildren:  './find/find.module#FindModule'
  },
  {
    path: 'booklist',
    loadChildren:  './booklist/booklist.module#BooklistModule'
  },
  {
    path: 'bookdetail/:book_id',
    loadChildren: './bookdetail/bookdetail.module#BookdetailModule'
  },
  {
    path: 'topic',
    loadChildren: './topic/topic.module#TopicModule'
  },
  {
    path: 'topicdetail/:topic_id',
    loadChildren: './topicdetail/topicdetail.module#TopicdetailModule'
  },
  {
    path: 'articledetail/:article_id',
    loadChildren: './articledetail/articledetail.module#ArticledetailModule'
  },
  {
    path: 'search/:search_text',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'pay/:book_id',
    loadChildren: './pay/pay.module#PayModule'
  },
  {
    path: 'paysecond/:book_id/:order_num/:price/:receive_id',
    loadChildren: './paysecond/paysecond.module#PaysecondModule'
  },
  {
    path: 'paysuccess/:price/:order_numbering/:receive_id',
    loadChildren: './paysuccess/paysuccess.module#PaysuccessModule'
  },
  {
    path: 'payovertime',
    loadChildren: './payovertime/payovertime.module#PayovertimeModule'

  },
  {
    path: 'refunddetail/:order_id',
    component: RefunddetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'personal-center/:tab_index',
    component: PersonalCenterComponent
  },
  {
    path: 'personalinfor',
    component: PersonalInformationComponent
  },
  {
    path: 'personaldetail/:user_id',
    component: PersonaldetailComponent
  },
  {
    path: 'testpublish/:topic_id',
    component: TestpublishComponent
  },
  {
    path: 'shortpublish/:book_id',
    component: ShortpublishComponent
  },
  {
    path: 'shortdetail/:short_id',
    component: ShortdetailComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
