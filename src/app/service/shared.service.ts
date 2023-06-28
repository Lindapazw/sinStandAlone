import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private popupOutputSource;
  public popupOutput$;
  constructor() {
    this.popupOutputSource = new Subject<any>();
    this.popupOutput$ = this.popupOutputSource.asObservable();
  }

  public submit(estado: boolean) {
    //cambia el estado del objeto subject
    this.popupOutputSource.next(estado);
  }
}
