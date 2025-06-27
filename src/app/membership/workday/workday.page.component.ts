import { Component } from '@angular/core';
import { BookSearchStore } from './workday.page.store';

@Component({
  selector: 'app-workday',
  imports: [],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  providers: [BookSearchStore]
})
export class WorkdayPageComponent {

}
