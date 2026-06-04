import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-groww-pin',
  imports: [CommonModule, FormsModule],
  templateUrl: './change-groww-pin.html',
  styleUrl: './change-groww-pin.css',
})
export class ChangeGrowwPin {
  newPin = '';
  confirmPin = '';
  
  showNewPin = false;
  showConfirmPin = false;

  onSubmit(): void {
    if (this.newPin === this.confirmPin) {
      console.log('PIN changed successfully');
    } else {
      console.error('PINs do not match');
    }
  }
}