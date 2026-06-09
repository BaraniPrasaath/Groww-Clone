import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StockStore } from '../../../../shared/services/Store/stock-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input() stock!: any;

  constructor(
    private route: Router,
    private storeSer: StockStore,
  ) {}

  openStock(searchId: string) {
    console.log(this.stock);
    this.storeSer.setStocks(this.stock);
    this.route.navigate(['/stocks', searchId]);
  }
}
