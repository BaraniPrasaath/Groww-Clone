import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dark-image',
  imports: [CommonModule],
  templateUrl: './dark-image.html',
  styleUrl: './dark-image.css',
})
export class DarkImage implements AfterViewInit {
  @ViewChildren('sectionElement')
  sectionRefs!: QueryList<ElementRef>;

  activeIndex = 0;

  sections = [
    {
      title: 'Track charts, positions, and trade in a customisable layout',
      button: 'Explore Terminal',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/img-frame-1.webp',
      darkBtn: false,
    },
    {
      title: 'Analyse Chains, view payoffs, create baskets',
      button: 'Option Chain',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/img-frame-2.webp',
      darkBtn: false,
    },
    {
      title: 'One-tap trade with Scalper mode on mobile',
      button: 'Explore Scalper mode',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/img-frame-3.webp',
      darkBtn: false,
    },
    {
      title: 'Trade in real world assets like Crude Oil, Gold, Silver and more',
      button: 'Explore Commodities',
      image:
        'https://resources.groww.in/web-assets/story_assets/landing-page/home_page/img-frame-4.webp',
      darkBtn: true,
    },
  ];

  ngAfterViewInit() {
    this.checkVisibleSection();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkVisibleSection();
  }

  checkVisibleSection() {
    this.sectionRefs.forEach((section, index) => {
      const rect = section.nativeElement.getBoundingClientRect();

      const middleOfScreen = window.innerHeight / 2;

      if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
        this.activeIndex = index;
      }
    });
  }
}
