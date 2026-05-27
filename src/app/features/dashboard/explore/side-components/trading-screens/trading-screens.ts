import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ScreenItem {
  title: string;
  sentiment: 'Bullish' | 'Bearish';
  icon: string;
}

@Component({
  selector: 'app-trading-screens',
  imports: [CommonModule],
  templateUrl: './trading-screens.html',
  styleUrl: './trading-screens.css',
})
export class TradingScreens {
  items: ScreenItem[] = [
    {
      title: 'Resistance breakouts',
      sentiment: 'Bullish',
      icon: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/stocks_near_breakout_light.webp',
    },
    {
      title: 'MACD above signal line',
      sentiment: 'Bullish',
      icon: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/macd_above_signal_line_light.webp',
    },
    {
      title: 'RSI overbought',
      sentiment: 'Bearish',
      icon: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/overbought_with_high_volume_light.webp',
    },
    {
      title: 'RSI oversold',
      sentiment: 'Bullish',
      icon: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/oversold_with_high_volume_light.webp',
    },
  ];
}
