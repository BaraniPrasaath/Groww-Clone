import { Routes } from '@angular/router';
import { Main } from './welcome/main/main';
import { Login } from './features/auth/login/login';
import { PhoneNum } from './features/auth/phone-num/phone-num';
import { OtpModel } from './features/auth/otp-model/otp-model';
import { Success } from './welcome/components/success/success';
import { PinEnter } from './features/auth/pin-enter/pin-enter';
import { PinOtpVerify } from './features/auth/pin-otp-verify/pin-otp-verify';
import { SetPassword } from './features/auth/set-password/set-password';
import { Register } from './features/auth/register/register';
import { PinVerify } from './features/auth/pin-verify/pin-verify';
import { MainComponent } from './features/dashboard/explore/main-component/main-component';
import { FloatingHeader } from './shared/components/floating-header/floating-header';

export const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'mobileVerificaiton',
    component: PhoneNum,
  },
  {
    path: 'otp',
    component: OtpModel,
  },
  {
    path: 'success',
    component: Success,
  },
  {
    path: 'pin-enter',
    component: PinEnter,
  },
  {
    path: 'pin-otp',
    component: PinOtpVerify,
  },
  {
    path: 'password-set',
    component: SetPassword,
  },
  {
    path: 'pin-verify',
    component: PinVerify,
  },
  {
    path: 'explore',
    component: MainComponent,
  },
  {
    path:'dummy',
    component:FloatingHeader,
  }
];
