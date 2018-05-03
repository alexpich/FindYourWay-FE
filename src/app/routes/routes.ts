import {Routes} from '@angular/router';
import {AboutComponent} from '../components/about/about.component';
import {HelpComponent} from '../components/help/help.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';

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
    }



]