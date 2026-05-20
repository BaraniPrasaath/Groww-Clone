import { Routes } from '@angular/router';
import { Main } from './welcome/main/main';
import { Login } from './features/auth/login/login';
import { PhoneNum } from './features/auth/phone-num/phone-num';
import { OtpModel } from './features/auth/otp-model/otp-model';
import { Success } from './welcome/components/success/success';

export const routes: Routes = [
  {
    path: '',
    component: Main,
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
];
