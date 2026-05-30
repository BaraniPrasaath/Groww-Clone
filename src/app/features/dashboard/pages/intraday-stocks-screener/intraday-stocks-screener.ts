import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ScreenerStock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  volume: string;
  volDiff: string;
  volDiffIsUp: boolean;
  fiftyTwoWeekPos: number; // 0 to 100 representing position on the L-H slider
}

@Component({
  selector: 'app-intraday-stocks-screener',
  imports: [CommonModule],
  templateUrl: './intraday-stocks-screener.html',
  styleUrl: './intraday-stocks-screener.css',
})
export class IntradayStocksScreener {
  // Using the placeholder logo provided previously
  private defaultLogo = 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp';

  stocks: ScreenerStock[] = [
    // --- Real Data from Screenshot ---
    { name: 'Netweb Technolog...', logo: this.defaultLogo, price: '₹4,670.70', change: '+598.70', changePercent: '14.70%', isUp: true, volume: '1,06,23,544', volDiff: '+1,011.85%', volDiffIsUp: true, fiftyTwoWeekPos: 95 },
    { name: 'Adani Total Gas', logo: this.defaultLogo, price: '₹773.30', change: '-35.25', changePercent: '4.36%', isUp: false, volume: '4,47,79,830', volDiff: '+87.48%', volDiffIsUp: true, fiftyTwoWeekPos: 90 },
    { name: 'MTAR Technologies', logo: this.defaultLogo, price: '₹7,879.50', change: '-10.00', changePercent: '0.13%', isUp: false, volume: '15,28,301', volDiff: '-30.34%', volDiffIsUp: false, fiftyTwoWeekPos: 88 },
    { name: 'Apollo Micro Syste...', logo: this.defaultLogo, price: '₹409.00', change: '-8.85', changePercent: '2.12%', isUp: false, volume: '1,90,00,777', volDiff: '-66.43%', volDiffIsUp: false, fiftyTwoWeekPos: 87 },
    { name: 'HFCL', logo: this.defaultLogo, price: '₹179.94', change: '+6.02', changePercent: '3.46%', isUp: true, volume: '11,11,12,652', volDiff: '+45.68%', volDiffIsUp: true, fiftyTwoWeekPos: 92 },
    { name: 'Jaiprakash Power ...', logo: this.defaultLogo, price: '₹21.87', change: '-1.00', changePercent: '4.37%', isUp: false, volume: '65,68,84,514', volDiff: '+60.98%', volDiffIsUp: true, fiftyTwoWeekPos: 75 },
    { name: 'Relaxo Footwears', logo: this.defaultLogo, price: '₹345.30', change: '+43.30', changePercent: '14.34%', isUp: true, volume: '1,68,42,941', volDiff: '+25,254.99%', volDiffIsUp: true, fiftyTwoWeekPos: 25 },
    
    // --- Mocked Data to reach 20 rows ---
    { name: 'Tata Motors', logo: this.defaultLogo, price: '₹980.15', change: '+12.40', changePercent: '1.28%', isUp: true, volume: '2,15,40,210', volDiff: '+12.50%', volDiffIsUp: true, fiftyTwoWeekPos: 80 },
    { name: 'Infosys', logo: this.defaultLogo, price: '₹1,432.10', change: '-5.60', changePercent: '0.39%', isUp: false, volume: '88,34,120', volDiff: '-5.20%', volDiffIsUp: false, fiftyTwoWeekPos: 40 },
    { name: 'State Bank of India', logo: this.defaultLogo, price: '₹845.60', change: '+8.25', changePercent: '0.99%', isUp: true, volume: '1,45,67,890', volDiff: '+22.10%', volDiffIsUp: true, fiftyTwoWeekPos: 85 },
    { name: 'TCS', logo: this.defaultLogo, price: '₹3,890.00', change: '-45.50', changePercent: '1.16%', isUp: false, volume: '44,21,500', volDiff: '-15.30%', volDiffIsUp: false, fiftyTwoWeekPos: 50 },
    { name: 'Wipro', logo: this.defaultLogo, price: '₹460.25', change: '+2.15', changePercent: '0.47%', isUp: true, volume: '1,12,30,000', volDiff: '+8.90%', volDiffIsUp: true, fiftyTwoWeekPos: 35 },
    { name: 'Bajaj Finance', logo: this.defaultLogo, price: '₹6,750.80', change: '-120.40', changePercent: '1.75%', isUp: false, volume: '23,45,670', volDiff: '+5.45%', volDiffIsUp: true, fiftyTwoWeekPos: 65 },
    { name: 'Axis Bank', logo: this.defaultLogo, price: '₹1,050.40', change: '+15.60', changePercent: '1.51%', isUp: true, volume: '98,76,540', volDiff: '+45.20%', volDiffIsUp: true, fiftyTwoWeekPos: 82 },
    { name: 'Bharti Airtel', logo: this.defaultLogo, price: '₹1,245.90', change: '+5.20', changePercent: '0.42%', isUp: true, volume: '67,89,120', volDiff: '-2.10%', volDiffIsUp: false, fiftyTwoWeekPos: 90 },
    { name: 'Maruti Suzuki', logo: this.defaultLogo, price: '₹12,340.50', change: '-210.00', changePercent: '1.67%', isUp: false, volume: '12,34,560', volDiff: '-18.50%', volDiffIsUp: false, fiftyTwoWeekPos: 60 },
    { name: 'Sun Pharma', logo: this.defaultLogo, price: '₹1,560.30', change: '+25.80', changePercent: '1.68%', isUp: true, volume: '34,56,780', volDiff: '+33.40%', volDiffIsUp: true, fiftyTwoWeekPos: 78 },
    { name: 'Titan Company', logo: this.defaultLogo, price: '₹3,450.10', change: '-18.90', changePercent: '0.54%', isUp: false, volume: '21,98,760', volDiff: '-10.80%', volDiffIsUp: false, fiftyTwoWeekPos: 72 },
    { name: 'Asian Paints', logo: this.defaultLogo, price: '₹2,890.60', change: '-34.20', changePercent: '1.17%', isUp: false, volume: '18,76,540', volDiff: '+2.30%', volDiffIsUp: true, fiftyTwoWeekPos: 45 },
    { name: 'Zomato', logo: this.defaultLogo, price: '₹185.40', change: '+9.20', changePercent: '5.22%', isUp: true, volume: '5,54,32,190', volDiff: '+120.50%', volDiffIsUp: true, fiftyTwoWeekPos: 98 }
  ];
}
