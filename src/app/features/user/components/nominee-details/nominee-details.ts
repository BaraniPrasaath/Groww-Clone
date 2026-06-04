import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nominee-details',
  imports: [CommonModule],
  templateUrl: './nominee-details.html',
  styleUrl: './nominee-details.css',
})
export class NomineeDetails {
  isFaqOpen = false; // Set to true by default to match the screenshot state

  toggleFaq(): void {
    this.isFaqOpen = !this.isFaqOpen;
  }

  onCompleteSetup(): void {
    console.log('Navigate to account setup workflow');
  }
}