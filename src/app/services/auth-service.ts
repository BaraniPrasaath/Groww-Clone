import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  fullData,
  returnLoginModel,
  tokenModel,
} from '../../models/auth-data-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  googleOAuth(idToken: string) {
    return this.http.post<fullData>('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/google', { idToken });
  }

  register(email: string) {
    return this.http.post<fullData>('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/email', { email });
  }

  onLogin(email: string, password: string) {
    return this.http.post<returnLoginModel>('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/login', {
      email,
      password,
    });
  }

  getOTP(userId: string, phoneNumber: string) {
    return this.http.post('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/phone', { userId, phoneNumber });
  }

  verifyOTP(userId: string, otp: string) {
    return this.http.post('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/verifyOtp', { userId, otp });
  }

  setPIN(userId: string, pin: string) {
    return this.http.post('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/set-pin', { userId, pin });
  }

  verifyPINotp(userId: string, otp: string) {
    return this.http.post('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/verify-pin-otp', { userId, otp });
  }

  setPassword(userId: string, password: string) {
    return this.http.post('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/set-password', { userId, password });
  }

  verifyPIN(userId: string, pin: string) {
    return this.http.post<tokenModel>('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/verify-login-pin', {
      userId,
      pin,
    });
  }

  // getAccessToken(): string | null {
  //   return localStorage.getItem('accessToken');
  // }

  // getRefreshToken(): string | null {
  //   return localStorage.getItem('refreshToken');
  // }

  // setAccessToken(token: string) {
  //   localStorage.setItem('accessToken', token);
  // }

  // setRefreshToken(token: string) {
  //   localStorage.setItem('refreshToken', token);
  // }

  // clearTokens() {
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  // }

  // refreshToken() {
  //   return this.http
  //     .post<getAccessTokenModel>('https://nhvtkx2d-5000.inc1.devtunnels.ms/api/auth/refresh-token', {
  //       refreshToken: this.getRefreshToken(),
  //     })
  //     .pipe(
  //       tap((res) => {
  //         this.setAccessToken(res.data.accessToken);
  //       }),
  //     );
  // }
}
