import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HelpComponent } from '../components/help/help.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { GetStartedComponent } from '../components/get-started/get-started.component';
import { QuestionsComponent } from '../components/questions/questions.component';

import { QuestionsAComponent } from '../components/questions-a/questions-a.component';
import { QuestionBComponent } from '../components/question-b/question-b.component';
import { QuestionsCComponent } from '../components/question-c/question-c.component';
import { QuestionBAComponent } from '../components/question-b-a/question-b-a.component';
import { QuestionBBComponent } from '../components/question-b-b/question-b-b.component';
import { QuestionBAAComponent } from '../components/question-b-a-a/question-b-a-a.component';
import { QuestionBABComponent } from '../components/question-b-a-b/question-b-a-b.component';
import { QuestionBBAComponent } from '../components/question-b-b-a/question-b-b-a.component';
import { QuestionBBBComponent } from '../components/question-b-b-b/question-b-b-b.component';
import { QuestionBACComponent } from '../components/question-b-a-c/question-b-a-c.component';
import { QuestionBBCComponent } from '../components/question-b-b-c/question-b-b-c.component';
import { QuestionBADComponent } from '../components/question-b-a-d/question-b-a-d.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'get-started',
        component: GetStartedComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent

    },
    {
        path: 'questions-a',
        component: QuestionsAComponent
    },
    {
        path: 'question-b',
        component: QuestionBComponent
    },
    {
        path: 'question-b-a',
        component: QuestionBAComponent
    },
    {
        path: 'question-b-a-a',
        component: QuestionBAAComponent
    },
    {
        path: 'question-b-a-b',
        component: QuestionBABComponent
    },
    {
        path: 'question-b-a-c',
        component: QuestionBACComponent
    },
    {
        path: 'question-b-a-d',
        component: QuestionBADComponent
    },
    {
        path: 'question-b-b',
        component: QuestionBBComponent
    },
    {
        path: 'question-b-b-a',
        component: QuestionBBAComponent
    },
    {
        path: 'question-b-b-b',
        component: QuestionBBBComponent
    },
    {
        path: 'question-b-b-c',
        component: QuestionBBCComponent
    },
    {
        path: 'question-c',
        component: QuestionsCComponent

    }
];
