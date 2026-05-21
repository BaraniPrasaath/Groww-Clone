import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-enter',
  imports: [FormsModule],
  templateUrl: './pin-enter.html',
  styleUrl: './pin-enter.css',
})
export class PinEnter {
  inputPIN = '';
  time = signal(30);
}
