import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface OrderTab {
  label: string;
  route: string;
}

@Component({
  selector: 'app-order-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './order-header.html',
  styleUrl: './order-header.css',
})
export class OrderHeader {
  // Define the tabs matching your child route paths
  tabs: OrderTab[] = [
    { label: 'Stocks', route: './stock' },
    { label: 'F&O', route: './futures-and-options' },
    { label: 'Mutual Funds', route: './mutual-funds' },
  ];
}
