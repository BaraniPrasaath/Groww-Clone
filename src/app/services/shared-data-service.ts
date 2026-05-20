import { Injectable } from '@angular/core';
import { authModel } from '../../models/auth-data-model';

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
}
