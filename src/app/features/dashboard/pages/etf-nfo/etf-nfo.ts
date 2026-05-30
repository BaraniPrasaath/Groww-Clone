import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ETF {
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
}

@Component({
  selector: 'app-etf-nfo',
  imports: [CommonModule],
  templateUrl: './etf-nfo.html',
  styleUrl: './etf-nfo.css',
})
export class EtfNfo {
  etfs: ETF[] = [
    { name: 'Groww Nifty India Defence ETF', price: '₹91.22', change: '-1.39', changePercent: '1.50%', isUp: false },
    { name: 'Groww Nifty PSU Bank ETF', price: '₹82.32', change: '-0.37', changePercent: '0.45%', isUp: false },
    { name: 'Groww Nifty India Railways PSU ETF', price: '₹30.02', change: '-0.75', changePercent: '2.44%', isUp: false },
    { name: 'Groww Nifty Private Bank ETF', price: '₹26.49', change: '-0.24', changePercent: '0.90%', isUp: false },
    { name: 'Groww Nifty Chemicals ETF', price: '₹29.25', change: '-0.50', changePercent: '1.68%', isUp: false },
    { name: 'Groww BSE Power ETF', price: '₹12.65', change: '-0.16', changePercent: '1.25%', isUp: false },
    { name: 'Groww BSE Hospitals ETF', price: '₹49.88', change: '-1.21', changePercent: '2.37%', isUp: false },
    { name: 'Groww Nifty PSE ETF', price: '₹102.95', change: '-2.13', changePercent: '2.03%', isUp: false },
    { name: 'Groww Nifty Metal ETF', price: '₹12.82', change: '-0.26', changePercent: '1.99%', isUp: false },
    // Mocked rows to reach 20
    { name: 'Groww Nifty Auto ETF', price: '₹145.50', change: '+1.20', changePercent: '0.83%', isUp: true },
    { name: 'Groww Nifty IT ETF', price: '₹320.10', change: '-2.50', changePercent: '0.78%', isUp: false },
    { name: 'Groww Nifty Pharma ETF', price: '₹210.45', change: '+0.80', changePercent: '0.38%', isUp: true },
    { name: 'Groww Nifty FMCG ETF', price: '₹560.20', change: '-1.10', changePercent: '0.20%', isUp: false },
    { name: 'Groww Nifty Financial ETF', price: '₹280.90', change: '+2.10', changePercent: '0.75%', isUp: true },
    { name: 'Groww Nifty Infrastructure ETF', price: '₹155.60', change: '-0.90', changePercent: '0.58%', isUp: false },
    { name: 'Groww Nifty Consumption ETF', price: '₹185.30', change: '+0.50', changePercent: '0.27%', isUp: true },
    { name: 'Groww Nifty Commodities ETF', price: '₹115.40', change: '-1.20', changePercent: '1.04%', isUp: false },
    { name: 'Groww Nifty Midcap ETF', price: '₹390.50', change: '+3.40', changePercent: '0.88%', isUp: true },
    { name: 'Groww Nifty Smallcap ETF', price: '₹240.20', change: '-2.10', changePercent: '0.87%', isUp: false },
    { name: 'Groww Nifty Dividend ETF', price: '₹195.80', change: '+0.90', changePercent: '0.46%', isUp: true }
  ];
}
