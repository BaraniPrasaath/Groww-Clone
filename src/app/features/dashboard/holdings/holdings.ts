import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holdings',
  imports: [CommonModule],
  templateUrl: './holdings.html',
  styleUrl: './holdings.css',
})
export class Holdings {
  // You can define variables here if you need to make the text dynamic
  introText = 'Introducing';
  title = 'Stocks';
  description = 'Investing in stocks will never be the same again';
  buttonText = 'TRY IT OUT';
  imageUrl =
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/intro.981292ef.png';
}
