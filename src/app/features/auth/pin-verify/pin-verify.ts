import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-verify',
  imports: [FormsModule],
  templateUrl: './pin-verify.html',
  styleUrl: './pin-verify.css',
})
export class PinVerify {
  inputPIN = '';

  onVerify() {
    if (this.inputPIN.length === 4) console.log('Verification Successful');
  }
}
