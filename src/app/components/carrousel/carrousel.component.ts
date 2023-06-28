import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CARROUSEL_DATA } from 'src/app/data';

@Component({
  selector: 'shared-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CarrouselComponent {
  public data = CARROUSEL_DATA;
}
