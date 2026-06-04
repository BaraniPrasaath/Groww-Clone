import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const stockData = [
  {
    id: 1,
    logo: 'adani',
    name: 'Adani Power',
    price: '₹243.37',
    change: '-₹5.54',
    changePct: '2.23%',
    volume: '7,18,56,898',
    low52: 15,
    high52: 78,
    trend: [
      [0, 38],
      [5, 35],
      [10, 40],
      [15, 32],
      [20, 34],
      [25, 30],
      [30, 33],
      [35, 28],
      [40, 31],
      [45, 26],
      [50, 29],
      [55, 24],
      [60, 27],
      [65, 22],
      [70, 25],
      [75, 20],
      [80, 28],
      [85, 18],
      [90, 23],
      [95, 15],
      [100, 20],
    ],
  },
  // ... add the rest of your objects here
];

@Component({
  selector: 'app-watchlist',
  imports: [CommonModule, FormsModule],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})
export class Watchlist {
  search = signal('');

  // Assuming stockData is imported or defined here
  stocks = signal([...stockData]);

  filtered = computed(() => {
    const searchTerm = this.search().toLowerCase();
    return this.stocks().filter((s) => s.name.toLowerCase().includes(searchTerm));
  });
}
