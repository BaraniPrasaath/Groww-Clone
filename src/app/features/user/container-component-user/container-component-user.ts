import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavBar } from '../side-nav-bar/side-nav-bar';

@Component({
  selector: 'app-container-component-user',
  imports: [SideNavBar, RouterOutlet],
  templateUrl: './container-component-user.html',
  styleUrl: './container-component-user.css',
})
export class ContainerComponentUser {

}
