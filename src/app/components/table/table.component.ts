import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
// table
import { ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeDTO } from 'src/app/model/EmployeeDTO';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from 'src/app/service/shared.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges, DoCheck {

  isLoading: boolean = true;
  private estado;

  empleadoVacio: EmployeeDTO = {
    name: '',
    lastName: '',
    dni: '',
    shortGoal: '',
    longGoal: '',
  };
  displayedColumns: string[] = [
    'name',
    'lastName',
    'dni',
    'longGoal',
    'shortGoal',
    'acciones',
  ];
  dataSource: MatTableDataSource<EmployeeDTO>;

  anterior = false;
  @Input() refrescar: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  formBuilder: any;

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private shared: SharedService
  ) {
    this.shared.popupOutput$.subscribe( data => this.estado = data)
  }
  ngDoCheck(): void {
    if(this.estado){
      this.employeeService.listarEmployees().then(
        response => {    
          this.dataSource = new MatTableDataSource(response);
        }
      )
      this.estado = false;
      console.log("ngDoCheck");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.refrescar != this.anterior) this.ngOnInit();
  }

  ngOnInit(): void {
    this.anterior = this.refrescar;
    this.employeeService.listarEmployees().then((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.isLoading = false;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmpoyee(dni: string) {
    this.employeeService
      .deleteEmployee(dni)
      .then((res) => this.ngOnInit())
      .catch((err) => console.log(err));
  }

  public openDialog(employee: EmployeeDTO) {
    this.dialog.open(PopupComponent, { data: employee });
    this.shared.editarExistente(true);
  }

  openNew() {
    this.empleadoVacio = {name: '',lastName: '',dni: '',shortGoal: '',longGoal: ''}
    this.dialog.open(PopupComponent, { data: this.empleadoVacio });
    this.shared.agregarNuevo(true);
  }
}