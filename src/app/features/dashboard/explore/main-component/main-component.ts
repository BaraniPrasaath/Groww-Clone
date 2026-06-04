import { Component, HostListener } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { SubHeader } from '../../../../shared/components/sub-header/sub-header';
import { AppFooter } from '../../../../shared/components/app-footer/app-footer';
import { FloatingHeader } from '../../../../shared/components/floating-header/floating-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [Header, SubHeader, FloatingHeader, AppFooter, RouterOutlet],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
  isSticky: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
