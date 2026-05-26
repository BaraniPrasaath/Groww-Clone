import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;

  cards = [
    {
      id: 1,
      title: 'IPO Reviews',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-1.webp',
    },
    {
      id: 2,
      title: 'Campus Core',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-2.webp',
    },
    {
      id: 3,
      title: 'Mind over Markets',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-3.webp',
    },
    {
      id: 4,
      title: 'Market Ki Baat',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-4.webp',
    },
    {
      id: 5,
      title: 'Tamil',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-5.webp',
    },
    {
      id: 6,
      title: 'Breakfast',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-6.webp',
    },
    {
      id: 7,
      title: 'Mutual Fund',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-7.webp',
    },
    {
      id: 8,
      title: 'Hindi',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-8.webp',
    },
    {
      id: 9,
      title: 'Marathi',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-9.webp',
    },
    {
      id: 10,
      title: 'Telugu',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-10.webp',
    },
    {
      id: 11,
      title: 'Telugu',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-11.webp',
    },
    {
      id: 12,
      title: 'Telugu',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-12.webp',
    },
    {
      id: 13,
      title: 'Telugu',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-13.webp',
    },
    {
      id: 14,
      title: 'Telugu',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/channel-card-14.webp',
    },
  ];

  ngAfterViewInit() {
    const swiperElement = this.swiperRef.nativeElement;

    Object.assign(swiperElement, {
      slidesPerView: 5,
      spaceBetween: 25,
      loop: true,

      speed: 5000,

      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true,
      },

      freeMode: true,
      freeModeMomentum: false,

      breakpoints: {
        320: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      },
    });

    swiperElement.initialize();
  }
}
