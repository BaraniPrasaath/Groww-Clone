import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-enter',
  imports: [ReactiveFormsModule],
  templateUrl: './pin-enter.html',
  styleUrl: './pin-enter.css',
})
export class PinEnter {

  time = signal(30);

  myForm = new FormGroup({
    inputPIN: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^\d{4}$/)
      ]
    })
  });

  get inputPIN() {
    return this.myForm.controls.inputPIN;
  }

  constructor(
    private authSer: AuthService,
    private dataSer: SharedDataService,
    private route: Router
  ) {}

  onSetPIN() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const userId = this.dataSer.getUserId();

    this.authSer
      .setPIN(userId, this.inputPIN.value)
      .subscribe((res) => {

        console.log('response of set PIN: ', res);

        this.route.navigate(['/pin-otp']);
      });
  }
}