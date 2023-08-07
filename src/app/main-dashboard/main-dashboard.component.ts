import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'À la carte', cols: 1, rows: 1 },
          { title: 'Burgers', cols: 1, rows: 1 },
          { title: 'Galletes/crêpes', cols: 1, rows: 1 },
          { title: 'Pizza', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'À la carte', cols: 2, rows: 1 },
        { title: 'Burgers', cols: 1, rows: 1 },
        { title: 'Galletes/crêpes', cols: 1, rows: 2 },
        { title: 'Pizza', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
