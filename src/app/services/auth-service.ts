import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fullData } from '../../models/auth-data-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  googleOAuth(idToken: string) {
    return this.http.post<fullData>('http://192.168.1.19:5000/api/auth/google', { idToken });
  }

  getOTP(userId: string, phoneNumber: string) {
    return this.http.post('http://192.168.1.19:5000/api/auth/phone', { userId, phoneNumber });
  }

  verifyOTP(userId: string, otp: string) {
    return this.http.post('http://192.168.1.19:5000/api/auth/verifyOtp', { userId, otp });
  }
}
