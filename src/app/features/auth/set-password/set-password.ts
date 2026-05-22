import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  imports: [FormsModule],
  templateUrl: './set-password.html',
  styleUrl: './set-password.css',
})
export class SetPassword {
  newPassword = '';
  conformPassword = '';

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  onSetPassword() {
    if (this.newPassword === this.conformPassword) {
      console.log('Password setted Successfully');
      const userId = this.dataSer.getUserId();
      this.authSer.setPassword(userId, this.newPassword).subscribe((res) => {
        console.log('response of set password: ', res);
        this.route.navigate(['/login'])
      });
    } else {
      console.log('ERROR');
    }
  }
}
