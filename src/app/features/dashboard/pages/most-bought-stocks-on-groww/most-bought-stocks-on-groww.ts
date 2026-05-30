import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { YourInvestments } from '../../explore/side-components/your-investments/your-investments';
import { Header } from '../../../../shared/components/header/header';
import { SubHeader } from '../../../../shared/components/sub-header/sub-header';
import { FloatingHeader } from '../../../../shared/components/floating-header/floating-header';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  volume: string;
}

@Component({
  selector: 'app-most-bought-stocks-on-groww',
  imports: [CommonModule],
  templateUrl: './most-bought-stocks-on-groww.html',
  styleUrl: './most-bought-stocks-on-groww.css',
})
export class MostBoughtStocksOnGroww {
  // Shared logo from your prompt
  private defaultLogo = 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp';

  stocks: Stock[] = [
    // --- Data exactly from the screenshot ---
    {
      name: 'HDFC Bank',
      logo: this.defaultLogo,
      price: '₹744.55',
      change: '-14.10',
      changePercent: '1.86%',
      isUp: false,
      volume: '10,12,99,431',
    },
    {
      name: 'ITC',
      logo: this.defaultLogo,
      price: '₹286.90',
      change: '-5.05',
      changePercent: '1.73%',
      isUp: false,
      volume: '3,19,30,439',
    },
    {
      name: 'Reliance Industries',
      logo: this.defaultLogo,
      price: '₹1,321.20',
      change: '-29.30',
      changePercent: '2.17%',
      isUp: false,
      volume: '4,26,34,247',
    },
    {
      name: 'Netweb Technologies India',
      logo: this.defaultLogo,
      price: '₹4,670.70',
      change: '598.70',
      changePercent: '14.70%',
      isUp: true,
      volume: '1,06,23,544',
    },
    {
      name: 'Hindustan Copper',
      logo: this.defaultLogo,
      price: '₹538.70',
      change: '-16.65',
      changePercent: '3.00%',
      isUp: false,
      volume: '53,65,662',
    },
    {
      name: 'Rail Vikas Nigam',
      logo: this.defaultLogo,
      price: '₹245.45',
      change: '-6.85',
      changePercent: '2.72%',
      isUp: false,
      volume: '6,26,20,879',
    },
    {
      name: 'Multi Commodity Exchange of India',
      logo: this.defaultLogo,
      price: '₹2,954.50',
      change: '-204.00',
      changePercent: '6.46%',
      isUp: false,
      volume: '1,76,55,814',
    },
    {
      name: 'Adani Total Gas',
      logo: this.defaultLogo,
      price: '₹773.30',
      change: '-35.25',
      changePercent: '4.36%',
      isUp: false,
      volume: '4,47,79,830',
    },

    // --- Additional mocked data to reach 20 rows ---
    {
      name: 'Tata Motors',
      logo: this.defaultLogo,
      price: '₹980.15',
      change: '12.40',
      changePercent: '1.28%',
      isUp: true,
      volume: '2,15,40,210',
    },
    {
      name: 'Infosys',
      logo: this.defaultLogo,
      price: '₹1,432.10',
      change: '-5.60',
      changePercent: '0.39%',
      isUp: false,
      volume: '88,34,120',
    },
    {
      name: 'State Bank of India',
      logo: this.defaultLogo,
      price: '₹845.60',
      change: '8.25',
      changePercent: '0.99%',
      isUp: true,
      volume: '1,45,67,890',
    },
    {
      name: 'TCS',
      logo: this.defaultLogo,
      price: '₹3,890.00',
      change: '-45.50',
      changePercent: '1.16%',
      isUp: false,
      volume: '44,21,500',
    },
    {
      name: 'Wipro',
      logo: this.defaultLogo,
      price: '₹460.25',
      change: '2.15',
      changePercent: '0.47%',
      isUp: true,
      volume: '1,12,30,000',
    },
    {
      name: 'Bajaj Finance',
      logo: this.defaultLogo,
      price: '₹6,750.80',
      change: '-120.40',
      changePercent: '1.75%',
      isUp: false,
      volume: '23,45,670',
    },
    {
      name: 'Axis Bank',
      logo: this.defaultLogo,
      price: '₹1,050.40',
      change: '15.60',
      changePercent: '1.51%',
      isUp: true,
      volume: '98,76,540',
    },
    {
      name: 'Bharti Airtel',
      logo: this.defaultLogo,
      price: '₹1,245.90',
      change: '5.20',
      changePercent: '0.42%',
      isUp: true,
      volume: '67,89,120',
    },
    {
      name: 'Maruti Suzuki',
      logo: this.defaultLogo,
      price: '₹12,340.50',
      change: '-210.00',
      changePercent: '1.67%',
      isUp: false,
      volume: '12,34,560',
    },
    {
      name: 'Sun Pharma',
      logo: this.defaultLogo,
      price: '₹1,560.30',
      change: '25.80',
      changePercent: '1.68%',
      isUp: true,
      volume: '34,56,780',
    },
    {
      name: 'Titan Company',
      logo: this.defaultLogo,
      price: '₹3,450.10',
      change: '-18.90',
      changePercent: '0.54%',
      isUp: false,
      volume: '21,98,760',
    },
    {
      name: 'Asian Paints',
      logo: this.defaultLogo,
      price: '₹2,890.60',
      change: '-34.20',
      changePercent: '1.17%',
      isUp: false,
      volume: '18,76,540',
    },
  ];

  isSticky: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
