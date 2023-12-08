import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { ViewportScroller } from '@angular/common';
// import * as AWS from 'aws-sdk';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
	@ViewChild('logoElement') logoElement: ElementRef;

	@ViewChildren('section') mycomponents: QueryList<any>;
	isTestDivScrolledIntoView: boolean;
	currentScrollPosition: number = 0;
	viewPortHeight: number = 0;
	scrollDirection: 'down' | 'up' = "down";

	images: { src: string, text: { header: string, description: string } }[] = [
		{
			src: 'https://static.wixstatic.com/media/bf1fba_2ce876d8847b4a6e801bdcb7f4ce4457~mv2.jpg/v1/fill/w_2820,h_1302,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bf1fba_2ce876d8847b4a6e801bdcb7f4ce4457~mv2.jpg',
			text: { header: "United Mission International Welcomes You", description: 'Make a Difference Today' }
		},
		{
			src: 'https://static.wixstatic.com/media/bf1fba_da9b910bdcaf48ed932816edc9630150~mv2.png/v1/fill/w_1481,h_684,al_c,q_90,enc_auto/bf1fba_da9b910bdcaf48ed932816edc9630150~mv2.png',
			text: { header: "Stay Connected", description: 'Join our newsletter to stay connected to us. We will keep you updated with all projects we are undertaking.' }
		},
		{
			src: 'https://static.wixstatic.com/media/bf1fba_684a131d0ac8455ba59d12d28393e4c4~mv2.jpg/v1/fill/w_2820,h_1302,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bf1fba_684a131d0ac8455ba59d12d28393e4c4~mv2.jpg',
			text: { header: "Become A Volunteer", description: 'Join a growing team to bring hope and relief to those in need' }
		}];

	constructor(private elementsService: ElementsService, private viewportScroller: ViewportScroller) { }

	ngOnInit(): void {
		console.log(this.mycomponents)
		this.viewPortHeight = this.elementsService.getViewPortData().height;
		// AWS.config.update({
		//   region: 'US East (Ohio) us-east-2',
		//   accessKeyId: 'AKIA2YF5OWU2QAAXST2D',
		//   secretAccessKey: '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'
		// });

		// let bucket = (new AWS.S3({
		//   params: {
		//     bucket: 'carosel',
		//     key: 'hands.webp',
		//     contentType: 'image/webp'
		//   }
		// }));

		// const url = bucket.getObject((err, data) => {
		//   console.log(err)
		//   console.log(data)
		// });

		// console.log(url)
	}

	ngAfterViewInit() {
		this.elementsService.logoElementData = {
			height: this.logoElement.nativeElement.getBoundingClientRect().height,
			width: this.logoElement.nativeElement.getBoundingClientRect().width
		};
	}

	scrollToAnchor() {
		console.log('scroll' + this.elementsService.getViewPortData().height)
		// this.viewportScroller.scrollToAnchor(anchor);
		// this.mission.nativeElement.scrollIntoView();
		// setTimeout(() => {
		// window.scrollTo(0, this.elementsService.getViewPortData().height);
		// window.scrollTo({
		//   top: this.elementsService.getViewPortData().height,
		//   behavior: 'smooth',
		// })

		// }, 10)
	}

	// @HostListener('window:scroll', ['$event'])
	// isScrolledIntoView() {
	//   if (this.carosel) {
	//     const rect = this.carosel.nativeElement.getBoundingClientRect();
	//     const topShown = rect.top >= 0;
	//     const bottomShown = rect.bottom <= window.innerHeight;
	//     this.isTestDivScrolledIntoView = topShown && bottomShown;
	//   }

	//   if (this.carosel) {
	//     const rect = this.carosel.nativeElement.getBoundingClientRect();
	//     const topShown = rect.top >= 0;
	//     const bottomShown = rect.bottom <= window.innerHeight;
	//     this.isTestDivScrolledIntoView = topShown && bottomShown;
	//   }
	// }


	// @HostListener("window:scroll", ['$event.target'])
	// onContentScrolled(e: HTMLElement) {
	//   const scroll = window.pageYOffset;
	//   console.log(scroll)
	//   if (scroll > this.currentScrollPosition) {
	//     console.log("scrollDown");
	//     this.scrollDirection = 'down';
	//   } else {
	//     console.log("scrollUp");
	//     this.scrollDirection = 'up';
	//   }
	//   this.currentScrollPosition = scroll;


	//   if (scroll > 200) {
	//     this.scrollToAnchor();
	//   }
	// }

	getCurrentHomePage() {

	}
}
