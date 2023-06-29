import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  constructor(public modalService: NgbModal) { }

  openModal(content: any) {
    const modalOptions: NgbModalOptions = {
      scrollable: true
    };

    this.modalService.open(content, modalOptions);
  }
}
