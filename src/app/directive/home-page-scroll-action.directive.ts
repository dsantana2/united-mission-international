import { AfterViewInit, Directive, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { DOCUMENT } from '@angular/common';
import { ViewportScroller } from '@angular/common';


@Directive({
	selector: '[appHomePageScrollAction]'
})
export class HomePageScrollActionDirective implements OnInit, AfterViewInit {
	isTestDivScrolledIntoView: boolean;
	currentScrollPosition: number = 0;
	viewPortHeight: number = 0;
	scrollDirection: 'down' | 'up' = "down";
	pageToScrollTo: { offsetTop: number, position: number, id: string };
	scrollInProgress: boolean = false;
	viewsArr: any;
	pagesData: { offsetTop: number, position: number, id: string }[];
	pageInView: { offsetTop: number, position: number, id: string } = { offsetTop: 0, position: 0, id: 'carosel' };

	constructor(private elementsService: ElementsService, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2, private viewportScroller: ViewportScroller) {
	}

	ngAfterViewInit(): void {
		// this.calculatePageData();
		// console.log(this.viewsArr)
		// console.log(this.pagesData);
	}

	ngOnInit(): void {
		console.log('he1')
		console.log(this.elementRef)
		this.viewsArr = Array.from(this.elementRef.nativeElement.childNodes).filter((x: any) => x.nodeName === "SECTION");
	}

	calculatePageData() {
		setTimeout(() => {
			this.pagesData = this.viewsArr.map((x: any, index: number) => {
				console.log(index)
				console.log(this.viewsArr[index].offsetTop)

				return { offsetTop: index === 0 ? 0 : x.offsetTop, position: index, id: x.id };
			})
		}, 0);
	}

	getPageToScroll(callback: any) {
		console.log(this.pagesData)

		if (this.scrollDirection === 'up') {

			if (this.pageInView.position > 0) {
				console.log(this.pageInView)
				this.pageToScrollTo = this.pagesData.filter((x: any) => x.position === this.pageInView.position - 1)[0];
				console.log(this.pageToScrollTo)
				callback();
			}
		} else {
			if (this.pageInView.position === this.pagesData.length - 1) return;
			this.pageToScrollTo = this.pagesData.filter((x: any) => x.position === this.pageInView.position + 1)[0];
			callback();

		}
	}

	scrollToAnchor() {
		this.getPageToScroll(() => {
			console.log('scrooling3')
			console.log(this.pageToScrollTo)
			// this.viewportScroller.scrollToPosition([0, this.pageToScrollTo.offsetTop]);
			this.viewportScroller.scrollToAnchor(this.pageToScrollTo.id)
			// this.renderer.addClass(this.document.body, 'no-scroll');
			// window.scrollTo({
			//   top: this.pageToScrollTo.offsetTop,
			//   behavior: 'smooth',
			// });
		});
	}

	@HostListener("window:scroll", ['$event.target'])
	onContentScrolled(e: HTMLElement) {
		console.log('here')
		// const scroll = window.pageYOffset;
		// let scrollOn = 100;
		// if (scroll > this.currentScrollPosition) {
		// 	// console.log("scrollDown");
		// 	this.scrollDirection = 'down';
		// 	scrollOn = this.pageInView.offsetTop + 100;
		// } else {
		// 	// console.log("scrollUp");
		// 	this.scrollDirection = 'up';
		// 	scrollOn = this.pageInView.offsetTop - 100;
		// }
		// this.currentScrollPosition = scroll;

		// if (scroll >= scrollOn && !this.scrollInProgress) {
		// 	console.log('in hereee')
		// 	this.scrollInProgress = true;
		// 	this.scrollToAnchor();
		// }

		// console.log('scrollOn: ' + scrollOn)
		// console.log(scroll)
		// console.log(this.pageToScrollTo)

		// if (this.pageToScrollTo != undefined && scroll === this.pageToScrollTo.offsetTop) {
		// 	console.log('finished')
		// 	this.scrollInProgress = false;
		// 	this.pageInView = this.pageToScrollTo;
		// 	this.renderer.removeClass(this.document.body, 'no-scroll');


		// }
	}
}
