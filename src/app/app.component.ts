import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ElementsService } from './services/elements.service';
import { NavigationEnd, Router } from '@angular/router';
// import * as AWS from 'aws-sdk';
// declare const Buffer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('logoElement') logoElement?: ElementRef;
  route?: string;
  constructor(private elementsService: ElementsService, private router: Router) { }
  ngOnInit(): void {
    // AWS.config.update({
    //   region: 'US East (Ohio) us-east-2',
    //   accessKeyId: 'AKIA2YF5OWU2QAAXST2D',
    //   secretAccessKey: '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'
    // });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route = event.url;
      }
    })
  }
  title = 'united-mission-international';
}
