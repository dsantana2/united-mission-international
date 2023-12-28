import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ElementsService } from '../../services/elements.service';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements AfterViewInit {
	@ViewChild('navigationBar') navigationBar: ElementRef;
	routes: { text: string, route: string }[] = [
		{ text: 'Home', route: '' },
		{ text: 'About', route: '/about' },
		{ text: 'Meet the team', route: '/meet-the-team' },
		// { text: 'Missions', route: '/missions' },
		{ text: 'Donate', route: '/donate' },
		{ text: 'Contact', route: '/contact' }
	];
	navBarFixedToTop: boolean = false;

	constructor(private elementsService: ElementsService,) { }

	ngAfterViewInit(): void {
		this.elementsService.navigationBarElementData = {
			height: this.navigationBar.nativeElement.getBoundingClientRect().height,
			width: this.navigationBar.nativeElement.getBoundingClientRect().width
		};

	}


	// @HostListener('window:scroll', ['$event'])
	// onWindowScroll() {
	//   const number = window.pageYOffset;
	//   if (number >= this.elementsService.getLogoElementData().height) {
	//     this.navBarFixedToTop = true;
	//   } else {
	//     this.navBarFixedToTop = false;
	//   }
	// }

}
