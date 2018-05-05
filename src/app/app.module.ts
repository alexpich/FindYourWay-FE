// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { QuestionBComponent } from './components/question-b/question-b.component';
import { QuestionsCComponent } from './components/question-c/question-c.component';
import { QuestionAAComponent } from './components/question-a-a/question-a-a.component';
import { QuestionABComponent } from './components/question-a-b/question-a-b.component';
import { QuestionACComponent } from './components/question-a-c/question-a-c.component';


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
    QuestionBComponent,
    QuestionsCComponent,
    QuestionAAComponent,
    QuestionABComponent,
    QuestionACComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
