import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-num',
  imports: [ReactiveFormsModule],
  templateUrl: './phone-num.html',
  styleUrl: './phone-num.css',
})
export class PhoneNum {
  myForm = new FormGroup({
    mobile: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{10}$/)],
    }),
  });

  get mobile() {
    return this.myForm.controls.mobile;
  }

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  onSend() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const userId: string = this.dataSer.getUserId();

    this.authSer.getOTP(userId, this.mobile.value).subscribe((res) => {
      console.log('Given OTP:', res);

      this.route.navigate(['/otp']);
    });
  }
}
