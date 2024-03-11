import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MapAndContactComponent } from './map-and-contact/map-and-contact.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,ListProductComponent,MapAndContactComponent,BannerComponent,PartnersComponent,NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
