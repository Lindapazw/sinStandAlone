import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ResourceDTO } from 'src/app/model/ResourceDTO';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatButtonModule, MaterialModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {  
  @Input() resource: ResourceDTO = {name: '', description: '', url: ''}
  @Output() deleteResource = new EventEmitter<Boolean>();

  constructor(private resourceService: ResourceService) { }

  deleteResources(){
    this.resourceService.deleteResourceBusiness(this.resource.name)
    .then(() => {
      this.deleteResource.emit(true);
    })    
  }
}
