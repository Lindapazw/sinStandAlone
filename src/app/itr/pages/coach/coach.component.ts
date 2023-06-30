import { Component, NgIterable, OnInit } from '@angular/core';
import { CoachDTO } from 'src/app/model/CoachDTO';
import { CoachService } from 'src/app/service/coach.service';


@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
})
export class CoachComponent implements OnInit {
  constructor(private coachService: CoachService) {} 

  //Coach-card
  dataSource: CoachDTO[] = [];
  filterCoach: CoachDTO[] = [];

  //Employee-table




  ngOnInit(): void {
    //Coach-card
    this.coachService.listCoaches().then((response) => {
      this.dataSource = response;
      this.filterCoach = response;
    });

    //Employee-table



  }

  // Filtro para coach-card
  applyFilter(event: any) {
    const filterValue = event.target.value.toLowerCase();

    this.filterCoach = this.dataSource.filter((coach: CoachDTO) => {
      const fullName = coach.name.toLowerCase() + ' ' + coach.lastname.toLowerCase();
      return fullName.includes(filterValue);
    });
  }

  // Tabla de empleados



}
