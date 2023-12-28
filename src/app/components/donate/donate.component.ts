import { AfterViewInit, Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        opacity: 1
      })
      ), state('hidden', style({
        opacity: 0,
      })
      ), transition('shown => hidden', [
        animate('1s')
      ]),
      transition('hidden => show', [
        animate('1s')
      ]),
    ])
  ]
})
export class DonateComponent implements AfterViewInit {
  state: string = 'hidden';

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'show';
    }, 200);
  }
}
