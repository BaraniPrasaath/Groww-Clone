import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DeviceSession {
  id: string;
  browser: string;
  os: string;
  lastActive: string;
  isCurrent: boolean;
}

@Component({
  selector: 'app-active-devices',
  imports: [CommonModule],
  templateUrl: './active-devices.html',
  styleUrl: './active-devices.css',
})
export class ActiveDevices {
  // Simulated device session data structured to match the design
  currentDevice: DeviceSession = {
    id: '1',
    browser: 'Chrome',
    os: 'Linux',
    lastActive: 'Active Now',
    isCurrent: true,
  };

  otherDevices: DeviceSession[] = [
    {
      id: '2',
      browser: 'Chrome',
      os: 'Windows',
      lastActive: 'Logged on 28 May, 07:28 PM',
      isCurrent: false,
    },
  ];

  onLogout(sessionId: string): void {
    console.log(`Logging out session: ${sessionId}`);
    // Implement actual session termination logic here
  }
}
