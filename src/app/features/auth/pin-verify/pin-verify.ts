import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { tokenModel } from '../../../../models/auth-data-model';

@Component({
  selector: 'app-pin-verify',
  imports: [ReactiveFormsModule],
  templateUrl: './pin-verify.html',
  styleUrl: './pin-verify.css',
})
export class PinVerify {
  myForm = new FormGroup({
    inputPIN: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}$/)]),
  });

  get inputPIN() {
    return this.myForm.controls.inputPIN;
  }

  constructor(
    private route: Router,
    private authSer: AuthService,
    private dataSer: SharedDataService,
  ) {}

  onVerify() {
    if (this.inputPIN.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }

    if (this.inputPIN.value?.length === 4) {
      console.log('Verification Successful');
      const userId = this.dataSer.getUserId();
      this.authSer.verifyPIN(userId, this.inputPIN.value).subscribe((res: tokenModel) => {
        console.log('response of verify pin: ', res);
        this.route.navigate(['/success']);
        setTimeout(() => {
          this.route.navigate(['/home']);
        }, 2000);
      });
    }
  }
}
