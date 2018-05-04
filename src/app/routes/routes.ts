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
        path: 'questions-b',
        component: QuestionBComponent
    },
    {
        path: 'questions-c',
        component: QuestionsCComponent

    }
];
