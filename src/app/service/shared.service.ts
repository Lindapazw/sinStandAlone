import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private popupOutputSource;
  public popupOutput$;
  private botonAgregar;
  public botonAgregar$;
  private botonEditar;
  public botonEditar$;

  constructor() {
    this.popupOutputSource = new Subject<any>();
    this.popupOutput$ = this.popupOutputSource.asObservable();
    this.botonAgregar = new Subject<any>();
    this.botonAgregar$ = this.botonAgregar.asObservable();
    this.botonEditar = new Subject<any>();
    this.botonEditar$ = this.botonEditar.asObservable();
  }

  public submit(estado: boolean) {
    //cambia el estado del objeto subject
    this.popupOutputSource.next(estado);
  }

  public agregarNuevo(estado: boolean){
  this.botonAgregar.next(estado);
  }

  public editarExistente(estado: boolean){
    this.botonEditar.next(estado);
    }
}
