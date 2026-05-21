import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-password',
  imports: [FormsModule],
  templateUrl: './set-password.html',
  styleUrl: './set-password.css',
})
export class SetPassword {
  newPassword = '';
  conformPassword = '';

  onSetPassword() {
    if (this.newPassword === this.conformPassword) {
      console.log('Password setted Successfully');
    } else {
      console.log('ERROR');
    }
  }
}
