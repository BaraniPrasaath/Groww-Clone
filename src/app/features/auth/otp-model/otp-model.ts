import { Component, OnDestroy, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-model',
  imports: [ReactiveFormsModule],
  templateUrl: './otp-model.html',
  styleUrl: './otp-model.css',
})
export class OtpModel implements OnDestroy {
  time = signal(30);
  timer: any = '';

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
  ) {
    this.timer = setInterval(() => {
      this.time.update((d) => d - 1);

      if (this.time() <= 0) {
        clearInterval(this.timer);

        this.route.navigate(['/mobileVerificaiton']);
      }
    }, 1000);
  }

  otpVerify() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const userId = this.dataSer.getUserId();

    this.authSer.verifyOTP(userId, this.inputOTP.value).subscribe((res) => {
      console.log('response: ', res);

      this.route.navigate(['/pin-enter']);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
