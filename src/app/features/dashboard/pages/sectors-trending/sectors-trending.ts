import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Sector {
  name: string;
  icon: string; // Using Unicode emojis for icons as placeholders
  gainers: number;
  losers: number;
  priceChange: string;
}

@Component({
  selector: 'app-sectors-trending',
  imports: [CommonModule],
  templateUrl: './sectors-trending.html',
  styleUrl: './sectors-trending.css',
})
export class SectorsTrending {
  sectors: Sector[] = [
    { name: 'Plastic and Polymers', icon: '🥤', gainers: 20, losers: 23, priceChange: '+3.55%' },
    { name: 'Electronic Manufacturers', icon: '⚡', gainers: 15, losers: 23, priceChange: '+2.30%' },
    { name: 'Footwear', icon: '👟', gainers: 5, losers: 9, priceChange: '+1.85%' },
    { name: 'Auto Retail', icon: '🚗', gainers: 2, losers: 4, priceChange: '+1.65%' },
    { name: 'Telecom Equipment', icon: '📡', gainers: 20, losers: 6, priceChange: '+1.42%' },
    { name: 'Leather', icon: '🥾', gainers: 3, losers: 1, priceChange: '+1.19%' },
    { name: 'Rubber Products', icon: '🏀', gainers: 5, losers: 7, priceChange: '+0.65%' },
    { name: 'Infrastructure', icon: '🏭', gainers: 81, losers: 109, priceChange: '+0.42%' },
    { name: 'Information Technology', icon: '💻', gainers: 97, losers: 141, priceChange: '+0.09%' },
    { name: 'REITs', icon: '💰', gainers: 10, losers: 4, priceChange: '+0.07%' },
    // Mocked rows to reach 20
    { name: 'Banking', icon: '🏦', gainers: 30, losers: 12, priceChange: '+0.05%' },
    { name: 'Pharmaceuticals', icon: '💊', gainers: 25, losers: 20, priceChange: '+0.04%' },
    { name: 'Energy', icon: '🔋', gainers: 15, losers: 15, priceChange: '-0.02%' },
    { name: 'Chemicals', icon: '🧪', gainers: 12, losers: 18, priceChange: '-0.10%' },
    { name: 'Media', icon: '📺', gainers: 8, losers: 20, priceChange: '-0.15%' },
    { name: 'Metals', icon: '⚙️', gainers: 14, losers: 16, priceChange: '-0.20%' },
    { name: 'Textiles', icon: '👕', gainers: 10, losers: 10, priceChange: '-0.25%' },
    { name: 'Construction', icon: '🏗️', gainers: 22, losers: 28, priceChange: '-0.30%' },
    { name: 'FMCG', icon: '📦', gainers: 18, losers: 12, priceChange: '-0.35%' },
    { name: 'Logistics', icon: '🚚', gainers: 5, losers: 15, priceChange: '-0.40%' }
  ];

  // Helper to calculate percentage for the bar width
  getBarWidth(gainers: number, losers: number) {
    const total = gainers + losers;
    return (gainers / total) * 100;
  }
}