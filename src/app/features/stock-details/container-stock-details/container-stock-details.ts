import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-stock-details',
  imports: [Header, RouterOutlet],
  templateUrl: './container-stock-details.html',
  styleUrl: './container-stock-details.css',
})
export class ContainerStockDetails {

}
