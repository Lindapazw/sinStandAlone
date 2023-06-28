import { Component } from '@angular/core';

@Component({
  selector: 'app-asignador',
  templateUrl: './asignador.component.html',
  styleUrls: ['./asignador.component.css'],
})
export class AsignadorComponent {
  public refreshTable = false;

  addItem(estado: boolean) {
    this.refreshTable = !this.refreshTable;
  }
}
