import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-anime',
  imports: [CommonModule],
  templateUrl: './grid-anime.html',
  styleUrl: './grid-anime.css',
})
export class GridAnime {
  cells = Array(180).fill(false);

  activateCell(index: number) {
    this.cells[index] = true;

    setTimeout(() => {
      this.cells[index] = false;
    }, 1000); // remove after 1 sec
  }
}
