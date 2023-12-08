import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
  scrollDirection: 'down' | 'up' = "down";
  @ViewChildren('section') mycomponents: QueryList<any>;

}
