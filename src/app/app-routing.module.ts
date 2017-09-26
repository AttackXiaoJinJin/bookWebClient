
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
// import { PersonalComponent } from './personal/personal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PayovertimeComponent } from './payovertime/payovertime.component';

//时
import { PayComponent } from './pay/pay.component';
import { PaysecondComponent } from './paysecond/paysecond.component';
import { SearchComponent } from './search/search.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component'

//何
import { TopicComponent } from './topic/topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
//chen
import {PersonalCenterComponent} from "./personal-center/personal-center.component";
import {PublishComponent} from "./publish/publish.component";
import {TestpublishComponent} from "./testpublish/testpublish.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent
  },
  {
    path: 'bookdetail/:book_id',
    component: BookdetailComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'topicdetail/:topic_id',
    component: TopicdetailComponent
  },
  {
    path: 'articledetail/:article_id',
    component: ArticledetailComponent
  },
  {
    path: 'search/:search_text',
    component: SearchComponent
  },
  {
    path: 'pay/:book_id',
    component: PayComponent
  },
  {
    path: 'paysecond/:book_id/:order_num/:price',
    component: PaysecondComponent
  },
  {
    path: 'paysuccess/:price/:order_numbering',
    component: PaysuccessComponent
  },
  {
    path: 'payovertime',
    component: PayovertimeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  // {
  //   path: 'personal',
  //   component: PersonalComponent
  // },
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
  // {
  //   path: 'publish',
  //   component: PublishComponent
  // },
  {
    path: 'testpublish',
    component: TestpublishComponent
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
