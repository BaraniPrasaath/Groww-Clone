import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-options',
  imports: [],
  templateUrl: './profile-options.html',
  styleUrl: './profile-options.css',
})
export class ProfileOptions {
  // User data
  userName = 'barani prasaath dhamodharan (Barani)';
  userEmail = 'baraniprasaathdhamodharan@gmail.com';

  // Wallet data
  walletBalance = '₹0.00';
  walletSubtitle = 'Stocks, F&O balance';

  @Output() conformation = new EventEmitter();

  onCick(msg: string) {
    this.conformation.emit(msg);
  }
}
