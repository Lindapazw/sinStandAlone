import { Component, DoCheck, OnInit } from '@angular/core';
import { ResourceDTO } from 'src/app/model/ResourceDTO';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent implements OnInit  {
  resources: ResourceDTO[] = [];

  constructor(private resourceService: ResourceService){}  

  ngOnInit(): void {
    this.loadResources();
  }


  async loadResources(): Promise<void> {
    try {
      this.resources = await this.resourceService.listarResourceBusiness();
    } catch (error) {
      console.error(error);
    }
  } 

  refrescarCards(estado: Boolean){
    if(estado){
      this.ngOnInit();
    }
  }
}
