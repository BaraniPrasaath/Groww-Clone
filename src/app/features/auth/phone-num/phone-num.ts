import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { OtpModel } from '../otp-model/otp-model';
import { SharedDataService } from '../../../services/shared-data-service';
import { FormsModule } from '@angular/forms';
import { optDataModel } from '../../../../models/auth-data-model';

@Component({
  selector: 'app-phone-num',
  imports: [FormsModule],
  templateUrl: './phone-num.html',
  styleUrl: './phone-num.css',
})
export class PhoneNum {
  inputData = '';
  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  onSend() {
    const userId: string = this.dataSer.getUserId();
    console.log(this.inputData);
    this.authSer.getOTP(userId, this.inputData).subscribe((res) => {
      console.log('Given OTP:', res);
      this.route.navigate(['/otp']);
    });
  }
}
