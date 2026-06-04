import { Component, HostListener } from '@angular/core';
import { FloatingHeader } from '../../../../../shared/components/floating-header/floating-header';
import { SubHeader } from '../../../../../shared/components/sub-header/sub-header';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from '../../../../../shared/components/app-footer/app-footer';
import { Navigation } from '../navigation/navigation';
import { Header } from '../../../../../shared/components/header/header';
import { NavBar } from '../nav-bar/nav-bar';
import { FloatNavBar } from '../float-nav-bar/float-nav-bar';

@Component({
  selector: 'app-container-component-without',
  imports: [RouterOutlet, AppFooter, NavBar, FloatNavBar],
  templateUrl: './container-component-without.html',
  styleUrl: './container-component-without.css',
})
export class ContainerComponentWithout {
  isSticky: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
