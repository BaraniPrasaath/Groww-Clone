import { Injectable } from '@angular/core';
import { authModel, returnLoginModel } from '../../models/auth-data-model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  storeUserData(data: authModel) {
    localStorage.setItem('UserDetails', JSON.stringify(data));
    localStorage.setItem('UserId', JSON.stringify(data.userId));
  }

  getUserId() {
    const data = localStorage.getItem('UserId');
    const userId = data ? JSON.parse(data) : '';
    return userId;
  }

  setUserId(userId: string) {
    localStorage.setItem('UserId', JSON.stringify(userId));
  }

  setUserProfile(profile: string) {
    localStorage.setItem('user profile', profile);
  }

  getUserProfile() {
    const data = localStorage.getItem('user profile');
    return data;
  }
}
