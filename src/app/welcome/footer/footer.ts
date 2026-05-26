import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  activeTab = 'Share Market';

  tabs = [
    'Share Market',
    'Indices',
    'F&O',
    'Mutual Funds',
    'ETFs',
    'Funds By Groww',
    'Calculators',
    'IPO',
    'Miscellaneous',
  ];

  shareMarketLinks = [
    {
      col: 1,
      links: ['Top Gainers Stocks', '52 Weeks High Stocks', 'Tata Motors', 'NHPC', 'ITC', 'Wipro'],
    },
    {
      col: 2,
      links: [
        'Top Losers Stocks',
        '52 Weeks Low Stocks',
        'IREDA',
        'State Bank of India',
        'Adani Power',
        'CDSL',
      ],
    },
    {
      col: 3,
      links: [
        'Most Traded Stocks',
        'Stocks Market Calender',
        'Tata Steel',
        'Tata Power',
        'Bharat Heavy Electricals',
        'Indian Oil Corporation',
      ],
    },
    {
      col: 4,
      links: ['Stocks Feed', 'Suzlon Energy', 'Zomato (Eternal)', 'Yes Bank', 'Infosys', 'NBCC'],
    },
    {
      col: 5,
      links: [
        'FII DII Activity',
        'IRFC',
        'Bharat Electronics',
        'HDFC Bank',
        'Vedanta',
        'Reliance Power',
      ],
    },
  ];

  alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Others',
  ];

  othersLinks = [
    'NSE',
    'BSE',
    'MCX',
    'Terms and Conditions',
    'Policies and Procedures',
    'Regulatory & Other Info',
    'Privacy Policy',
    'Disclosure',
    'SMART ODR',
    'Download Forms',
    'Information Security Practices',
    'Investor Charter and Grievance',
    'Bug Bounty',
  ];

  othersRow1 = [
    'NSE',
    'BSE',
    'MCX',
    'Terms and Conditions',
    'Policies and Procedures',
    'Regulatory & Other Info',
    'Privacy Policy',
    'Disclosure',
    'SMART ODR',
  ];
  othersRow2 = [
    'Download Forms',
    'Information Security Practices',
    'Investor Charter and Grievance',
    'Bug Bounty',
  ];

  growwLinks = [
    'About Us',
    'Pricing',
    'Blog',
    'Media & Press',
    'Careers',
    'Help & Support',
    'Trust & Safety',
    'Investor Relations',
  ];

  productsCol1 = [
    'Stocks',
    'F&O',
    'MTF',
    'ETF',
    'IPO',
    'Mutual Funds',
    'Commodities',
    'Groww Terminal',
  ];
  productsCol2 = [
    '915 Terminal',
    'Stock Screens',
    'Algo Trading',
    'Groww Charts',
    'Groww Digest',
    'Demat Account',
    'Groww AMC',
    'PMS',
  ];

  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
