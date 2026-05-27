import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  volume: string;
  isHovered?: boolean;
}

@Component({
  selector: 'app-top-movers',
  imports: [CommonModule],
  templateUrl: './top-movers.html',
  styleUrl: './top-movers.css',
})
export class TopMovers {
  stocks: Stock[] = [
    {
      name: 'Siemens Energy India',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ENRIN.webp',
      price: '₹3,723.00',
      change: '260.40 (7.52%)',
      volume: '10,84,701',
    },
    {
      name: 'Adani Energy Solut.',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ADANIENSOL.webp',
      price: '₹1,534.50',
      change: '71.20 (4.87%)',
      volume: '10,12,050', // Hidden on hover in screenshot, but data is needed
    },
    {
      name: 'CG Power & Inds',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/CGPOWER.webp',
      price: '₹918.65',
      change: '39.50 (4.49%)',
      volume: '47,50,444',
    },
    {
      name: 'ABB India',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ABB.webp',
      price: '₹7,078.00',
      change: '274.00 (4.03%)',
      volume: '3,13,662',
    },
    {
      name: 'Hindalco',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/HINDALCO.webp',
      price: '₹1,146.30',
      change: '42.50 (3.85%)',
      volume: '47,36,965',
    },
    {
      name: 'Vedanta',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/VEDL.webp',
      price: '₹354.70',
      change: '9.80 (2.84%)',
      volume: '1,96,61,335',
    },
  ];
}
