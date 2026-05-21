import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-otp-verify',
  imports: [FormsModule],
  templateUrl: './pin-otp-verify.html',
  styleUrl: './pin-otp-verify.css',
})
export class PinOtpVerify {
  time = signal(30);
  inputOTP = '';

  constructor() {}

  onOTPchange() {
    if (this.inputOTP.length === 4) {
      console.log(this.inputOTP);
    }
  }
}
