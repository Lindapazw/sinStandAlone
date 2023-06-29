import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { EmployeeDTO } from 'src/app/model/EmployeeDTO';
import { MatTableDataSource } from '@angular/material/table';
import { CoachService } from 'src/app/service/coach.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-coach-table',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css'],
})
export class CoachTableComponent implements OnInit {
  displayedColumns: string[] = ['name','lastName','dni','longGoal','shortGoal'];
  dataSource: MatTableDataSource<EmployeeDTO>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dniCoach: string = '45678901';

  constructor(private coachService: CoachService) {}

  ngOnInit(): void {
    this.coachService.listEmployeeCoach(this.dniCoach)
    .then((response) => {
      this.dataSource = response;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}





