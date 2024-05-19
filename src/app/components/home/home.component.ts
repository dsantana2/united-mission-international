import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { MobileMenuService } from '../../services/mobile-menu.service';
import * as AWS from 'aws-sdk';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DeviceDetectorService } from '../../services/device-detection.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
		trigger("myAnimationTrigger", [
			state('shown', style({
				transform: 'translateY(0%)'
			})
			), state('hidden', style({
				transform: 'translateY(100%)', display: 'none', opacity: 0
			})
			), transition('shown => hidden', [
				animate('0.5s')
			]),
		])
	]
})
export class HomeComponent implements OnInit {
	@ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
	@ViewChild('logoElement') logoElement: ElementRef;
	@ViewChildren('section') section: QueryList<any>;
	isTestDivScrolledIntoView: boolean;
	currentScrollPosition: number = 0;
	viewPortHeight: number = 0;
	scrollDirection: 'down' | 'up' = "down";
	url: string;
	s3: any;
	sectionsList = [];
	selectedView: string = 'carosel';
	images: { left?: number, src: string, text: { header: string, description: string, width?: number | string }, button?: { text: string, link: string } }[] = [
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
			text: { header: "United Mission International Welcomes You", description: 'Make a Difference Today' },
			button: { text: 'Donate Now', link: '/donate' }
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
			text: { header: "Stay Connected", description: 'Join our newsletter to stay connected to us. We will keep you updated with all projects we are undertaking.' },
		},
		{
			left: 120,
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: { header: "Become A Volunteer", description: 'Join a growing team to bring hope and relief to those in need', width: 470 },
			button: { text: 'Contact Us', link: 'mailto:info@unitedmi.org' }
		}];

	constructor(private elementsService: ElementsService, private cd: ChangeDetectorRef,
		private mobileMenuService: MobileMenuService, private deviceDetector: DeviceDetectorService) { }

	ngOnInit(): void {

		if (this.deviceDetector.isMobile()) {
			this.images[2].left = 0;
			this.images[2].text.width = 'auto';

		}

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
		this.loadSectionList();

		this.elementsService.logoElementData = {
			height: this.logoElement.nativeElement.getBoundingClientRect().height,
			width: this.logoElement.nativeElement.getBoundingClientRect().width
		};

		this.cd.detectChanges();
	}

	showHideMobileMenu() {
		this.mobileMenuService.openHideMobileMenu.next({});
	}

	loadSectionList() {
		this.section['_results'].forEach((element, i) => {
			this.sectionsList = [...this.sectionsList, { id: element.nativeElement.id }];
		});

		console.log(this.sectionsList)

		const element = document.querySelector("div#home");
		element.addEventListener("scrollend", (event) => {
			const carosel = this.section['_results'][0].nativeElement;
			const hope = this.section['_results'][1].nativeElement;
			const bible = this.section['_results'][2].nativeElement;
			const mission = this.section['_results'][3].nativeElement;

			if (this.elementInViewport(carosel)) {
				this.selectedView = 'carosel';
				console.log('carosel')
			}

			if (this.elementInViewport(hope)) {
				this.selectedView = 'hope';
				console.log('hope')
			}

			if (this.elementInViewport(bible)) {
				this.selectedView = 'bible';
				console.log('bible')
			}

			if (this.elementInViewport(mission)) {
				this.selectedView = 'mission';
				console.log('mission')
			}
		});
	}

	getCurrentHomePage() {

	}


	@HostListener('window:scrolled', ['$event'])
	onWindowScroll() {
		console.log('scroll')


	}


	elementInViewport(element) {
		const bounding = element.getBoundingClientRect();

		if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
			return true;
		} else {

			return false;
		}
	}

	partOfElementInViewport(element) {

		const bounding = element.getBoundingClientRect();
		const myElementHeight = element.offsetHeight;
		const myElementWidth = element.offsetWidth;

		if (bounding.top >= -myElementHeight
			&& bounding.left >= -myElementWidth
			&& bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
			&& bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

			return true;
		} else {

			return false;
		}
	}
}
