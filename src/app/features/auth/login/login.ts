import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import {
  authModel,
  fullData,
  returnLoginModel,
  userLoginModel,
} from '../../../../models/auth-data-model';
import { SharedDataService } from '../../../services/shared-data-service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare const google: any;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit, OnDestroy {
  blinkData = signal('Stocks');

  myForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  get email() {
    return this.myForm.controls.email;
  }

  get password() {
    return this.myForm.controls.password;
  }

  errorMsg = signal('');

  data = ['Mutual Funds', 'F & O', 'IPO', 'MTF', 'Intraday', 'ETF', 'Commodities', 'Bonds'];

  timer: any;

  loginData: userLoginModel = {
    email: '',
    password: '',
  };

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
    // private toster: ToastrService,
  ) {}

  ngAfterViewInit(): void {
    this.startBlinkAnimation();
  }

  startBlinkAnimation() {
    let i = 0;

    this.timer = setInterval(() => {
      this.blinkData.set(this.data[i]);

      i++;

      if (i >= this.data.length) {
        i = 0;
      }
    }, 2000);
  }

  onSignIn() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.authSer.onLogin(this.email.value, this.password.value).subscribe({
      next: (res: returnLoginModel) => {
        console.log('Response of Login: ', res);

        const userId = this.dataSer.getUserId();

        if (!userId) {
          this.dataSer.setUserId(res.data.userId);
        }

        this.route.navigate(['/pin-verify']);
      },

      error: (err: any) => {
        console.log('Error from login: ', err.error.message);

        this.errorMsg.set(err.error.message);
      },
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
