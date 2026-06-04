import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  imageUrl =
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stockEmptyDashboard.7c05e365.svg';
}
