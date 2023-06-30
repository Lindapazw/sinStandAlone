import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OportunidadDTO } from 'src/app/model/OportunidadDTO';
import { OportunidadService } from 'src/app/service/oportunidad.service';

@Component({
  selector: 'app-oportunidad',
  templateUrl: './oportunidad.component.html',
  styleUrls: ['./oportunidad.component.css']
})
export class OportunidadComponent implements OnInit {

  constructor(private oportunityService: OportunidadService) { }

  dataSource: MatTableDataSource<OportunidadDTO>
  

  ngOnInit(): void {
    this.oportunityService.listOpportunity().then((response) => {
      this.dataSource = new MatTableDataSource(response);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }).catch((error) => { console.error(error) })
  }

  displayedColumns: string[] = ['code', 'opportunityName', 'description', 'acciones'];


  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  addOpportunity() {
    
  }

  

}
