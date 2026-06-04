import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-suspecious-activity',
  imports: [CommonModule],
  templateUrl: './report-suspecious-activity.html',
  styleUrl: './report-suspecious-activity.css',
})
export class ReportSuspeciousActivity {
  securityActions = [
    { title: 'Logout of all devices', icon: 'log-out' },
    { title: 'Change Groww Pin', icon: 'key' },
    { title: 'Change password', icon: 'mail' },
    { title: 'Freeze Account', icon: 'slash' },
  ];

  constructor(private route: Router) {}

  handleAction(action: string): void {
    console.log(`Triggering action: ${action}`);
    if (action === 'Logout of all devices') {
      this.route.navigate(['/user/profile/active-devices']);
    } else if (action === 'Change Groww Pin') {
      this.route.navigate(['/user/profile/change-pin']);
    } else if (action === 'Change password') {
      this.route.navigate(['/user/profile/change-password']);
    }
  }
}
