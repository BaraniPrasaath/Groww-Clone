import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ETF {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  nav: string;
  navDelta: string;
  navIsUp: boolean;
  volume: string;
  oneYearReturn: string;
  returnIsUp: boolean;
  expenseRatio: string;
  aum: string;
  trackingError: string;
}

@Component({
  selector: 'app-etf-screener',
  imports: [CommonModule],
  templateUrl: './etf-screener.html',
  styleUrl: './etf-screener.css',
})
export class EtfScreener {
  // Using a standard placeholder logo
  private defaultLogo = 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp';

  etfs: ETF[] = [
    // --- Data extracted from the video ---
    { name: 'Tata Silver Exchange Traded Fund', logo: this.defaultLogo, price: '₹25.30', change: '-0.03', changePercent: '0.12%', isUp: false, nav: '₹25.10', navDelta: '-0.79%', navIsUp: false, volume: '3,65,55,225', oneYearReturn: '+168.17%', returnIsUp: true, expenseRatio: '0.39%', aum: '5,368Cr', trackingError: '0.04%' },
    { name: 'Tata Gold Exchange Traded Fund', logo: this.defaultLogo, price: '₹15.09', change: '-0.05', changePercent: '0.33%', isUp: false, nav: '₹15.03', navDelta: '-0.40%', navIsUp: false, volume: '4,69,17,363', oneYearReturn: '+62.20%', returnIsUp: true, expenseRatio: '0.36%', aum: '5,857Cr', trackingError: '0.05%' },
    { name: 'Nippon India Silver ETF', logo: this.defaultLogo, price: '₹249.37', change: '-0.50', changePercent: '0.20%', isUp: false, nav: '₹247.38', navDelta: '-0.80%', navIsUp: false, volume: '1,90,10,853', oneYearReturn: '+170.91%', returnIsUp: true, expenseRatio: '0.56%', aum: '31,125Cr', trackingError: '0.38%' },
    { name: 'Nippon India ETF Gold BeES', logo: this.defaultLogo, price: '₹128.65', change: '-0.39', changePercent: '0.30%', isUp: false, nav: '₹128.06', navDelta: '-0.46%', navIsUp: false, volume: '1,87,31,585', oneYearReturn: '+64.12%', returnIsUp: true, expenseRatio: '0.80%', aum: '55,540Cr', trackingError: '0.08%' },
    { name: 'ICICI Prudential Nifty Metal ETF', logo: this.defaultLogo, price: '₹13.48', change: '-0.33', changePercent: '2.39%', isUp: false, nav: '₹13.79', navDelta: '+2.30%', navIsUp: true, volume: '3,18,26,409', oneYearReturn: '+45.29%', returnIsUp: true, expenseRatio: '0.40%', aum: '1,063Cr', trackingError: '0.04%' },
    { name: 'Nippon India ETF Nifty IT', logo: this.defaultLogo, price: '₹32.27', change: '+0.21', changePercent: '0.66%', isUp: true, nav: '₹32.06', navDelta: '-0.65%', navIsUp: false, volume: '1,98,88,606', oneYearReturn: '-21.35%', returnIsUp: false, expenseRatio: '0.22%', aum: '3,478Cr', trackingError: '0.05%' },
    { name: 'Groww BSE Power ETF', logo: this.defaultLogo, price: '₹12.65', change: '-0.16', changePercent: '1.25%', isUp: false, nav: '₹12.79', navDelta: '+1.11%', navIsUp: true, volume: '70,30,283', oneYearReturn: '--', returnIsUp: true, expenseRatio: '1.06%', aum: '239Cr', trackingError: '0.11%' },
    { name: 'Groww Gold ETF', logo: this.defaultLogo, price: '₹15.18', change: '-0.05', changePercent: '0.33%', isUp: false, nav: '₹15.12', navDelta: '-0.40%', navIsUp: false, volume: '13,51,121', oneYearReturn: '+61.80%', returnIsUp: true, expenseRatio: '0.35%', aum: '1,200Cr', trackingError: '0.06%' },
    { name: 'Nippon India ETF Nifty 50 BeES', logo: this.defaultLogo, price: '₹267.78', change: '-3.16', changePercent: '1.17%', isUp: false, nav: '₹270.93', navDelta: '+1.18%', navIsUp: true, volume: '1,13,88,803', oneYearReturn: '-3.22%', returnIsUp: false, expenseRatio: '0.05%', aum: '40,500Cr', trackingError: '0.02%' },
    { name: 'Nippon India Nifty Pharma ETF', logo: this.defaultLogo, price: '₹25.02', change: '-0.30', changePercent: '1.18%', isUp: false, nav: '₹25.35', navDelta: '+1.32%', navIsUp: true, volume: '98,96,004', oneYearReturn: '+15.25%', returnIsUp: true, expenseRatio: '0.20%', aum: '1,800Cr', trackingError: '0.07%' },
    
    // --- Mocked Data to reach 20 rows ---
    { name: 'Groww Nifty Metal ETF', logo: this.defaultLogo, price: '₹12.82', change: '-0.26', changePercent: '1.99%', isUp: false, nav: '₹13.03', navDelta: '+1.64%', navIsUp: true, volume: '11,12,940', oneYearReturn: '+35.10%', returnIsUp: true, expenseRatio: '0.45%', aum: '450Cr', trackingError: '0.08%' },
    { name: 'Zerodha Silver ETF', logo: this.defaultLogo, price: '₹26.48', change: '-0.02', changePercent: '0.08%', isUp: false, nav: '₹26.81', navDelta: '+1.25%', navIsUp: true, volume: '1,47,44,797', oneYearReturn: '+167.78%', returnIsUp: true, expenseRatio: '0.38%', aum: '3,200Cr', trackingError: '0.05%' },
    { name: 'Groww Silver ETF', logo: this.defaultLogo, price: '₹25.54', change: '-0.04', changePercent: '0.16%', isUp: false, nav: '₹25.34', navDelta: '-0.78%', navIsUp: false, volume: '12,13,869', oneYearReturn: '-73.40%', returnIsUp: false, expenseRatio: '0.40%', aum: '800Cr', trackingError: '0.06%' },
    { name: 'Zerodha Nifty 1D Rate Liquid ETF', logo: this.defaultLogo, price: '₹114.30', change: '+0.04', changePercent: '0.04%', isUp: true, nav: '₹114.25', navDelta: '-0.04%', navIsUp: false, volume: '2,08,57,748', oneYearReturn: '+5.06%', returnIsUp: true, expenseRatio: '0.10%', aum: '15,000Cr', trackingError: '0.01%' },
    { name: 'Mirae Asset Nifty Metal ETF', logo: this.defaultLogo, price: '₹13.55', change: '-0.28', changePercent: '2.02%', isUp: false, nav: '₹13.81', navDelta: '+1.92%', navIsUp: true, volume: '37,48,313', oneYearReturn: '+45.37%', returnIsUp: true, expenseRatio: '0.35%', aum: '950Cr', trackingError: '0.07%' },
    { name: 'ICICI Prudential Gold ETF', logo: this.defaultLogo, price: '₹133.12', change: '-0.42', changePercent: '0.31%', isUp: false, nav: '₹132.53', navDelta: '-0.44%', navIsUp: false, volume: '72,59,449', oneYearReturn: '+62.72%', returnIsUp: true, expenseRatio: '0.50%', aum: '8,200Cr', trackingError: '0.06%' },
    { name: 'ICICI Prudential Silver ETF', logo: this.defaultLogo, price: '₹260.35', change: '-0.66', changePercent: '0.25%', isUp: false, nav: '₹258.22', navDelta: '-0.82%', navIsUp: false, volume: '57,00,163', oneYearReturn: '+169.03%', returnIsUp: true, expenseRatio: '0.50%', aum: '6,100Cr', trackingError: '0.05%' },
    { name: 'Mirae Asset Nifty Midcap 150 ETF', logo: this.defaultLogo, price: '₹23.04', change: '-0.34', changePercent: '1.45%', isUp: false, nav: '₹23.35', navDelta: '+1.35%', navIsUp: true, volume: '42,96,780', oneYearReturn: '+48.10%', returnIsUp: true, expenseRatio: '0.15%', aum: '2,500Cr', trackingError: '0.03%' },
    { name: 'Zerodha Gold ETF', logo: this.defaultLogo, price: '₹24.51', change: '-0.04', changePercent: '0.16%', isUp: false, nav: '₹24.66', navDelta: '+0.61%', navIsUp: true, volume: '1,05,08,855', oneYearReturn: '+62.69%', returnIsUp: true, expenseRatio: '0.38%', aum: '4,100Cr', trackingError: '0.06%' },
    { name: 'HDFC Silver ETF', logo: this.defaultLogo, price: '₹249.75', change: '-0.13', changePercent: '0.05%', isUp: false, nav: '₹247.34', navDelta: '-0.96%', navIsUp: false, volume: '28,14,352', oneYearReturn: '+167.34%', returnIsUp: true, expenseRatio: '0.40%', aum: '3,800Cr', trackingError: '0.05%' }
  ];
}