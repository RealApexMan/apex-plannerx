import { Component, inject } from '@angular/core';
import { WorkdayStore } from './workday.page.store';

@Component({
  selector: 'app-workday',
  imports: [],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  providers: [WorkdayStore]
})
export class WorkdayPageComponent {
  readonly store = inject(WorkdayStore);
}
