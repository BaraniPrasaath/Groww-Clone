import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groww-family-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './groww-family-component.html',
  styleUrl: './groww-family-component.css',
})
export class GrowwFamilyComponent {
  cards = [
    {
      title: '915',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/card-915.webp',
      link: 'https://915.groww.in',
    },
    {
      title: 'W',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/card-W.webp',
      link: 'https://w.groww.in',
    },
    {
      title: 'API Trading',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/card-trade-api.webp',
      link: 'https://groww.in/trade-api',
    },
  ];
}
