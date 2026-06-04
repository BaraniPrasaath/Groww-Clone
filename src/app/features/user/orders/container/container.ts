import { Component } from '@angular/core';
import { OrderHeader } from '../order-header/order-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [OrderHeader, RouterOutlet],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
