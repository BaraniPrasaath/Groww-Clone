import { Component, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-model',
  imports: [FormsModule],
  templateUrl: './otp-model.html',
  styleUrl: './otp-model.css',
})
export class OtpModel implements OnDestroy {
  time = signal(30);
  timer: any = '';
  inputOTP = '';
  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {
    this.timer = setInterval(() => {
      this.time.update((d) => d - 1);
    }, 1000);
  }

  otpVerify() {
    const userId = this.dataSer.getUserId();
    this.authSer.verifyOTP(userId, this.inputOTP).subscribe((res) => {
      console.log('response: ', res);
      this.route.navigate(['/success']);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
