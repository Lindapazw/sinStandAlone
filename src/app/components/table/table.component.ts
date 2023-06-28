import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
// table
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeDTO } from 'src/app/model/EmployeeDTO';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatTableModule, 
    MatSortModule, MatPaginatorModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent implements AfterViewInit, OnInit, OnChanges{
  displayedColumns: string[] = ['name', 'lastName', 'dni', 'longGoal','shortGoal','acciones'];
  dataSource: MatTableDataSource<EmployeeDTO>;

  anterior = false;
  @Input() refrescar: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  formBuilder: any;

  constructor(private employeeService: EmployeeService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.refrescar != this.anterior)
      this.ngOnInit();
  }


  ngOnInit(): void {
    this.anterior = this.refrescar;
    this.employeeService.listarEmployees().then(
      response => {    
        this.dataSource = new MatTableDataSource(response);}
    )
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

  deleteEmpoyee(dni: string){
      this.employeeService.deleteEmployee(dni)
      .then(res => this.ngOnInit())
      .catch( err => console.log(err))
  }
}

