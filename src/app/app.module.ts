import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//导入路由
import { AppRoutingModule } from './app-routing.module';
//导入服务
import { GlobalPropertyService } from './services/global-property.service';
import {LocalStorage} from "./services/localStorage.service";
//模块
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PersonalComponent } from './personal/personal.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { NavComponent } from './nav/nav.component';
import { BootomComponent } from './bootom/bootom.component';
import { RuntopComponent } from './runtop/runtop.component';
import {PublishComponent} from "./publish/publish.component";
import { TestpublishComponent } from './testpublish/testpublish.component'

//导入指令
import {MyStyleDirective} from "./directives/mystyle.directive";
import {SearchStyleDirective} from "./directives/searchstyle.directive";
import {ArticlesService} from "./services/articles.service";
import { RefunddetailComponent } from './refunddetail/refunddetail.component'
import { ShortpublishComponent } from './shortpublish/shortpublish.component';
import { ShortdetailComponent } from './shortdetail/shortdetail.component'

//解决404问题
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BooklistModule} from "./booklist/booklist.module";
import {FindModule} from "./find/find.module";

import {IndexModule} from "./index/index.module";
import {PipesModule} from "./pipes/pipes.module";
import {ArticledetailModule} from "./articledetail/articledetail.module";
import {BookdetailModule} from "./bookdetail/bookdetail.module";
import {PageModule} from "./page/page.module";
import {PayModule} from "./pay/pay.module";
import {PaysecondModule} from "./paysecond/paysecond.module";
import {PersonalCenterModule} from "./personal-center/personal-center.module";
import {PersonaldetailModule} from "./personaldetail/personaldetail.module";
import {TopicModule} from "./topic/topic.module";
import {TopicdetailModule} from "./topicdetail/topicdetail.module";
import {SearchModule} from "./search/search.module";
import {PaysuccessModule} from "./paysuccess/paysuccess.module";
import {PayovertimeModule} from "./payovertime/payovertime.module";
import {TopicListModule} from "./topic/topic-list/topic-list.module";
import {ArticleitemComponent} from "./find/articleitem/articleitem.component";
import {ArticleitemModule} from "./find/articleitem/articleitem.module";
import {AddressModule} from "./address/address.module";
import {PersonalInformationModule} from "./personal-information/personal-information.module";

@NgModule({
  declarations: [
    AppComponent,
    BootomComponent,
    LoginComponent,
    NavComponent,
    NotfoundComponent,
    PersonalComponent,
    PublishComponent,
    RefunddetailComponent,
    RegistComponent,
    RuntopComponent,
    ShortdetailComponent,
    ShortpublishComponent,
    TestpublishComponent,

    //指令
    MyStyleDirective,
    SearchStyleDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgbModule,
    PipesModule,
    ArticledetailModule,
    BookdetailModule,
    BooklistModule,
    SearchModule,
    IndexModule,
    PageModule,
    PayModule,
    PaysecondModule,
    PersonalCenterModule,
    PersonaldetailModule,
    PersonalInformationModule,
    TopicModule,
    TopicdetailModule,
    PaysuccessModule,
    PayovertimeModule,
    TopicListModule,
    ArticleitemModule,
    AddressModule,

    AppRoutingModule,

  ],

  //全局服务,解决路由刷新问题
  providers: [GlobalPropertyService,ArticlesService,LocalStorage,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
