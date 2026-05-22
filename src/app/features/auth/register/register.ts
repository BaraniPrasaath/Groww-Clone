import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { authModel, fullData } from '../../../../models/auth-data-model';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

declare const google: any;

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements AfterViewInit, OnDestroy {
  blinkData = signal('Stocks');

  data = ['Mutual Funds', 'F & O', 'IPO', 'MTF', 'Intraday', 'ETF', 'Commodities', 'Bonds'];

  timer: any;

  myForm = new FormGroup({
    inputData: new FormControl('', [Validators.required, Validators.email]),
  });

  authData: authModel = {
    name: '',
    email: '',
    status: '',
    nextStep: '',
    userId: '',
    redirectTo: '',
    message: '',
  };

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  ngAfterViewInit(): void {
    this.startBlinkAnimation();

    // Wait slightly to ensure SDK is loaded
    setTimeout(() => {
      this.initializeGoogleAuth();
    }, 500);
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

  onContinue() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const email = this.inputData?.value!;
    this.authSer.register(email).subscribe({
      next: (res: fullData) => {
        console.log('Login Success', res);
        console.log('the Name: ', res.data.name);
        this.authData.name = res.data.name;
        this.authData.email = res.data.email;
        this.authData.status = res.data.status;
        this.authData.nextStep = res.data.nextStep;
        this.authData.userId = res.data.userId;
        console.log('Recirect to: ', res.data.redirectTo);
        if (res.data.redirectTo === 'LOGIN_PAGE') {
          this.route.navigate(['/login']);
        } else if (res.data.redirectTo === 'VERIFY_PIN_PAGE') {
          this.route.navigate(['/pin-verify']);
        } else {
          this.dataSer.storeUserData(this.authData);
          this.dataSer.setUserId(this.authData.userId);
          this.route.navigate(['/mobileVerificaiton']);
        }
      },

      error: (err) => {
        console.log('Login Error', err);
      },
    });
  }

  initializeGoogleAuth() {
    if (typeof google === 'undefined') {
      console.error('Google SDK not loaded');
      return;
    }

    google.accounts.id.initialize({
      client_id: '306147110657-fn6jckl6rvsmf6haq4q4kutgpckm7ccg.apps.googleusercontent.com',

      callback: (response: any) => {
        const idToken = response.credential;

        console.log('Google Token:', idToken);

        // Send token to backend
        this.authSer.googleOAuth(idToken).subscribe({
          next: (res: fullData) => {
            console.log('Login Success', res);
            console.log('the Name: ', res.data.name);
            this.authData.name = res.data.name;
            this.authData.email = res.data.email;
            this.authData.status = res.data.status;
            this.authData.nextStep = res.data.nextStep;
            this.authData.userId = res.data.userId;
            console.log('Recirect to: ', res.data.redirectTo);
            if (res.data.redirectTo === 'LOGIN_PAGE') {
              this.route.navigate(['/login']);
            } else if (res.data.redirectTo === 'VERIFY_PIN_PAGE') {
              this.route.navigate(['/pin-verify']);
            } else {
              this.dataSer.storeUserData(this.authData);
              this.dataSer.setUserId(this.authData.userId);
              this.route.navigate(['/mobileVerificaiton']);
            }
          },

          error: (err) => {
            console.log('Login Error', err);
          },
        });
      },
    });

    // Render Google Button
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      shape: 'rectangular',
      width: 320,
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  get inputData() {
    return this.myForm.controls.inputData;
  }
}
