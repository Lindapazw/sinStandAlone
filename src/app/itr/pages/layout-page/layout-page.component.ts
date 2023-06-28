import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)

    .pipe(
      map((result) => result.matches),

      shareReplay()
    );

  /** Based on the screen size, switch from standard to one column per row */

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },

          { title: 'Card 2', cols: 1, rows: 1 },

          { title: 'Card 3', cols: 1, rows: 1 },

          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },

        { title: 'Card 2', cols: 1, rows: 1 },

        { title: 'Card 3', cols: 1, rows: 2 },

        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );
}
