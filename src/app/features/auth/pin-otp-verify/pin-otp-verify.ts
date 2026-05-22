import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-otp-verify',
  imports: [ReactiveFormsModule],
  templateUrl: './pin-otp-verify.html',
  styleUrl: './pin-otp-verify.css',
})
export class PinOtpVerify {
  time = signal(30);

  myForm = new FormGroup({
    inputOTP: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{6}$/)],
    }),
  });

  get inputOTP() {
    return this.myForm.controls.inputOTP;
  }

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  onOTPchange() {
    if (this.myForm.invalid) {
      return;
    }

    const userId = this.dataSer.getUserId();

    this.authSer.verifyPINotp(userId, this.inputOTP.value).subscribe((res) => {
      console.log('response of verify pin otp: ', res);

      this.route.navigate(['/password-set']);
    });
  }
}
