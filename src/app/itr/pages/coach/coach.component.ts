import { Component, OnInit } from '@angular/core';
import { CoachDTO } from 'src/app/model/CoachDTO';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
})
export class CoachComponent implements OnInit {

  constructor(private coachService: CoachService) {}

  dataSource: CoachDTO[]
  
  ngOnInit(): void {
    this.coachService.listCoaches()
    .then( response => {this.dataSource = response});
  }
}
