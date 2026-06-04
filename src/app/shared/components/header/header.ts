import { Component, OnInit, signal } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  profile = signal(
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png',
  );

  constructor(private dataSer: SharedDataService) {}

  ngOnInit(): void {
    const userProfile = this.dataSer.getUserProfile();
    console.log(userProfile);
    if (userProfile) {
      this.profile.set(userProfile);
    }
  }
}
