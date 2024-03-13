import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'san-pham', component: ProductDetailComponent },
    { path: 'tin-tuc', component: NewsComponent },
    { path: 'gioi-thieu', component: AboutComponent },
    { path: '404', component: NotFoundComponent }
];
