import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HelpComponent } from '../components/help/help.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { GetStartedComponent } from '../components/get-started/get-started.component';
import { QuestionsComponent } from '../components/questions/questions.component';

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
    }
];
