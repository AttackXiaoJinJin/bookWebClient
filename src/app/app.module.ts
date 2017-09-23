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
import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PersonalComponent } from './personal/personal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookitemComponent } from './find/bookitem/bookitem.component';
import { EverybookComponent } from './find/everybook/everybook.component';
import { ArticleitemComponent } from './find/articleitem/articleitem.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistBookitemComponent } from './booklist/booklist-bookitem/booklist-bookitem.component';

//时
import { NavComponent } from './nav/nav.component';
import { BootomComponent } from './bootom/bootom.component';
import { BannerComponent } from './index/banner/banner.component';
import { BooksComponent } from './index/books/books.component';
import { TabComponent } from './index/tab/tab.component';
import { ArticleComponent } from './index/article/article.component';
import { PaginationComponent } from './index/pagination/pagination.component';
import { PayComponent } from './pay/pay.component';
import { BuyComponent } from './pay/buy/buy.component';
import { BuystepComponent } from './pay/buy/buystep/buystep.component';
import { SuccessComponent } from './pay/success/success.component';
import { PaysecondComponent } from './paysecond/paysecond.component';
import { ConfirmComponent } from './paysecond/confirm/confirm.component';
import { ConfirmstepComponent } from './paysecond/confirm/confirmstep/confirmstep.component';

//何
import { TopicComponent } from './topic/topic.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { SearchTopicComponent } from './topic/search-topic/search-topic.component';
import { ListComponent } from './topic/list/list.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { TopicTopComponent } from './topicdetail/topic-top/topic-top.component';
import { ArticleCommentComponent } from './articledetail/article-comment/article-comment.component';



//chen
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import {PublishComponent} from "./publish/publish.component";
import { TestpublishComponent } from './testpublish/testpublish.component'
//管道
import { FindbookPipe } from './pipes/findbook.pipe';
import { FindArticlePipe } from './pipes/find-article.pipe';
import { StringSlicePipe} from "./pipes/string-slice.pipe";


//导入指令
import {MyStyleDirective} from "./directives/mystyle.directive";
import {SearchStyleDirective} from "./directives/searchstyle.directive";
import {ArticlesService} from "./services/articles.service";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { BookcommentComponent } from "./bookdetail/bookcomment/bookcomment.component";
import { SentenceComponent } from "./bookdetail/sentence/sentence.component";
import {PageComponent} from "./page/page.component";
import {SearchComponent} from "./search/search.component";
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PayovertimeComponent } from './payovertime/payovertime.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FindComponent,
    LoginComponent,
    RegistComponent,
    PersonalComponent,
    NotfoundComponent,
    BookitemComponent,
    EverybookComponent,
    ArticleitemComponent,
    BooklistComponent,
    BookdetailComponent,
    BooklistBookitemComponent,

    //时
    NavComponent,
    BootomComponent,
    BannerComponent,
    BooksComponent,
    TabComponent,
    ArticleComponent,
    PaginationComponent,
    PayComponent,
    BuyComponent,
    BuystepComponent,
    SuccessComponent,
    PaysecondComponent,
    ConfirmComponent,
    ConfirmstepComponent,
    SearchComponent,

    //何
    TopicComponent,
    TopicListComponent,
    SearchTopicComponent,
    ListComponent,
    TopicdetailComponent,
    TopicTopComponent,
    ArticledetailComponent,
    ArticleCommentComponent,

    //管道
    FindbookPipe,
    StringSlicePipe,
    FindArticlePipe,

    //指令
    MyStyleDirective,
    SearchStyleDirective,

    //chen
    TestpublishComponent,
    PersonalCenterComponent,
    BookcommentComponent,
    SentenceComponent,
    PublishComponent,
    //new
    PersonalInformationComponent,
    PageComponent,
    PaysuccessComponent,
    PayovertimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AppRoutingModule,
    // NgbModule.forRoot()
  ],
  providers: [GlobalPropertyService,ArticlesService,LocalStorage],
  //providers: [GlobalPropertyService,LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
