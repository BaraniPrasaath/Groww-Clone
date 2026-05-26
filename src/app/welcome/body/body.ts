import { Component } from '@angular/core';
import { Banner } from '../components/banner/banner';
import { Marketing } from '../components/marketing/marketing';
import { GridAnime } from '../components/grid-anime/grid-anime';
import { DarkImage } from '../components/dark-image/dark-image';
import { DarkVideo } from '../components/dark-video/dark-video';
import { Carousel } from '../components/carousel/carousel';
import { DarkBanner } from '../components/dark-banner/dark-banner';
import { Footer } from '../footer/footer';
import { GrowwFamilyComponent } from '../components/groww-family-component/groww-family-component';
import { HeroTextComponent } from '../components/hero-text-component/hero-text-component';

@Component({
  selector: 'app-body',
  imports: [
    Banner,
    Marketing,
    GridAnime,
    DarkImage,
    DarkVideo,
    Carousel,
    GrowwFamilyComponent,
    HeroTextComponent,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
