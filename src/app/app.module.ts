// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// Routes
import {routes} from './routes/routes';

import { QuestionsComponent } from './components/questions/questions.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { QuestionsAComponent } from './components/questions-a/questions-a.component';
import { QuestionAAComponent } from './components/question-a-a/question-a-a.component';
import { QuestionABComponent } from './components/question-a-b/question-a-b.component';
import { QuestionACComponent } from './components/question-a-c/question-a-c.component';
import { QuestionBComponent } from './components/question-b/question-b.component';
import { QuestionsCComponent } from './components/question-c/question-c.component';
import { QuestionBAComponent } from './components/question-b-a/question-b-a.component';
import { QuestionBBComponent } from './components/question-b-b/question-b-b.component';
import { QuestionBAAComponent } from './components/question-b-a-a/question-b-a-a.component';
import { QuestionBABComponent } from './components/question-b-a-b/question-b-a-b.component';
import { QuestionBACComponent } from './components/question-b-a-c/question-b-a-c.component';
import { QuestionBADComponent } from './components/question-b-a-d/question-b-a-d.component';
import { QuestionBBAComponent } from './components/question-b-b-a/question-b-b-a.component';
import { QuestionBBBComponent } from './components/question-b-b-b/question-b-b-b.component';
import { QuestionBBCComponent } from './components/question-b-b-c/question-b-b-c.component';
import { QuestionCAComponent } from './components/question-c-a/question-c-a.component';
import { QuestionCBComponent } from './components/question-c-b/question-c-b.component';
import { QuestionCCComponent } from './components/question-c-c/question-c-c.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    CarouselComponent,
    QuestionsComponent,

    GetStartedComponent,
    QuestionsAComponent,
    QuestionAAComponent,
    QuestionABComponent,
    QuestionACComponent,
    QuestionBComponent,
    QuestionsCComponent,
    QuestionBAComponent,
    QuestionBBComponent,
    QuestionBAAComponent,
    QuestionBABComponent,
    QuestionBACComponent,
    QuestionBADComponent,
    QuestionBBAComponent,
    QuestionBBBComponent,
    QuestionBBCComponent,
    QuestionCAComponent,
    QuestionCBComponent,
    QuestionCCComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
