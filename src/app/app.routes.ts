import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexPageContentComponent } from './index-page-content/index-page-content.component';
import { CareerPathPageContentComponent } from './career-path-page-content/career-path-page-content.component';
import { PostsPageContentComponent } from './posts-page-content/posts-page-content.component';
import { ContactPageContentComponent } from './contact-page-content/contact-page-content.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Index',
        component: IndexPageContentComponent
    },
    {
        path: 'career-path',
        title: 'Career Path',
        component: CareerPathPageContentComponent
    },
    {
        path: 'posts',
        title: 'Posts',
        component: PostsPageContentComponent
    },
    {
        path: 'contact',
        title: 'Contact',
        component: ContactPageContentComponent
    }
];