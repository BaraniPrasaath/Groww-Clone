import { Component } from '@angular/core';
import { Banner } from '../components/banner/banner';
import { Marketing } from '../components/marketing/marketing';
import { GridAnime } from '../components/grid-anime/grid-anime';

@Component({
  selector: 'app-body',
  imports: [Banner, Marketing, GridAnime],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
