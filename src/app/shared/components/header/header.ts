import { Component, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data-service';
import { Router, RouterLink } from '@angular/router';
import { ProfileOptions } from '../../../features/user/profile-options/profile-options';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  @ViewChild('popUp', { read: ViewContainerRef }) popUpContainer!: ViewContainerRef;

  profile = signal(
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png',
  );

  popUP = signal(false);

  constructor(private dataSer: SharedDataService, private route: Router) {}

  ngOnInit(): void {
    const userProfile = this.dataSer.getUserProfile();
    console.log(userProfile);
    if (userProfile) {
      this.profile.set(userProfile);
    }
  }

  onProfileClick() {
    if (this.popUP()) {
      this.popUpContainer.clear();
      this.popUP.update((d) => !d);
      return;
    }
    this.popUpContainer.clear();
    const ref = this.popUpContainer.createComponent(ProfileOptions);
    ref.instance.conformation.subscribe((v: string) => this.onConformation(v));
    this.popUP.update((d) => !d);
  }

  onConformation(msg: string) {
    console.log(msg);
    if(msg === 'profile'){
      this.route.navigate(['/user/profile/basic-details'])
    }
    else if(msg === 'balance'){
      this.route.navigate(['/user/balance/inr'])
    }
    else if(msg === 'orders'){
      this.route.navigate(['/user/order/stock'])
    }
    else if(msg === 'help'){
      this.route.navigate(['/help'])
    }
    else if(msg === 'reports'){
      this.route.navigate(['/user/profile/report'])
    }
  }
}
