import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ElementsService } from './services/elements.service';
import { NavigationEnd, Router } from '@angular/router';
import { MobileMenuService } from './services/mobile-menu.service';
// import * as AWS from 'aws-sdk';
// declare const Buffer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('logoElement') logoElement?: ElementRef;
  route?: string;
  mobileMenuOpen: boolean = false;
  routes: { text: string, route: string }[] = [
    { text: 'Home', route: '' },
    { text: 'About', route: '/about' },
    { text: 'Meet the team', route: '/meet-the-team' },
    { text: 'Missions', route: '/missions' },
    { text: 'Donate', route: '/donate' },
    { text: 'Contact', route: '/contact' }
  ];

  constructor(private elementsService: ElementsService, private router: Router, private mobileMenuService: MobileMenuService) { }

  ngAfterViewInit(): void {
    this.elementsService.logoElementData = {
      height: this.logoElement.nativeElement.getBoundingClientRect().height,
      width: this.logoElement.nativeElement.getBoundingClientRect().width
    };
  }

  showHideMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  ngOnInit(): void {
    this.mobileMenuService.openHideMobileMenu.subscribe(() => {
      this.showHideMobileMenu();
    });
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
