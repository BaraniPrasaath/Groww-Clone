import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main',
  imports: [Header, Body, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
