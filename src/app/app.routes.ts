import { Routes } from '@angular/router';
import { IndexPageContentComponent } from './home-page-content/home-page-content.component';
import { CareerPathPageContentComponent } from './career-path-page-content/career-path-page-content.component';
import { PostsPageContentComponent } from './posts-page-content/posts-page-content.component';
import { ContactPageContentComponent } from './contact-page-content/contact-page-content.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home - FrontEnd Blog',
        component: IndexPageContentComponent
    },
    {
        path: 'career-path',
        title: 'Career Path - FrontEnd Blog',
        component: CareerPathPageContentComponent
    },
    {
        path: 'posts',
        title: 'Posts - FrontEnd Blog',
        component: PostsPageContentComponent
    },
    {
        path: 'contact',
        title: 'Contact - FrontEnd Blog',
        component: ContactPageContentComponent
    }
];