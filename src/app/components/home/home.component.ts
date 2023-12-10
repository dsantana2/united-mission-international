import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { ViewportScroller } from '@angular/common';
import * as AWS from 'aws-sdk';

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
	url: string;
	s3: any;

	images: { src: string, text: { header: string, description: string } }[] = [
		{
			src: 'https://united-mission-international.s3.us-east-2.amazonaws.com/carosel/carosel-photo-one.webp',
			text: { header: "United Mission International Welcomes You", description: 'Make a Difference Today' }
		},
		{
			src: 'https://united-mission-international.s3.us-east-2.amazonaws.com/carosel/carosel-photo-two.webp',
			text: { header: "Stay Connected", description: 'Join our newsletter to stay connected to us. We will keep you updated with all projects we are undertaking.' }
		},
		{
			src: 'https://united-mission-international.s3.us-east-2.amazonaws.com/carosel/carosel-photo-three.webp',
			text: { header: "Become A Volunteer", description: 'Join a growing team to bring hope and relief to those in need' }
		}];

	constructor(private elementsService: ElementsService, private viewportScroller: ViewportScroller) { }

	ngOnInit(): void {
		this.viewPortHeight = this.elementsService.getViewPortData().height;

		this.s3 = new AWS.S3({
			accessKeyId: "AKIA2YF5OWU2QAAXST2D",
			region: 'us-east-2',
			secretAccessKey: "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"
		});


		this.listDirectories().then((res) => {
			console.log(res)
		})
	}

	listDirectories = () => {
		return new Promise((resolve, reject) => {
			const s3params = {
				Bucket: 'united-mission-international',
				Prefix: 'carosel/',
				MaxKeys: 20,
				Delimiter: '/',
			};
			this.s3.listObjectsV2(s3params, (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	};

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
