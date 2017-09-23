
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
    path: 'articledetail/:artical_id',
    component: ArticledetailComponent
  },
  {
    path: 'search/:search_text',
    component: SearchComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'paysecond',
    component: PaysecondComponent
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
    path: 'personal-center',
    component: PersonalCenterComponent
  },
  {
    path: 'personalinfor',
    component: PersonalInformationComponent
  },
  {
    path: 'personaldetail',
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
