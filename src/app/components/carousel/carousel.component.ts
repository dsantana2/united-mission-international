import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { ElementsService } from '../../services/elements.service';
import { DeviceDetectorService } from '../../services/device-detection.service'

import {
	fadeIn,
	fadeOut,
	scaleIn,
	scaleOut,
} from "./carosel.animations";

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	animations: [
		trigger("slideAnimation", [
			/* scale */
			transition("void => *", [useAnimation(scaleIn, { params: { time: '500ms' } })]),
			transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
		]),
		trigger("carouselAnimation", [
			transition("void => *", [useAnimation(fadeIn, { params: { time: '1200ms' } })]),
			transition("* => void", [useAnimation(fadeOut, { params: { time: '1200ms' } })]),
		])
	]
})
export class CarouselComponent implements OnInit {
	@Input() slides: { left?: number, src: string, text: { header: string, description: string, width?: number | string }, button?: { text: string, link: string } }[];
	@Input() displayImageText: boolean;
	currentSlide = 0;
	@ViewChild('imageSlider', { static: false }) imageSlider: ElementRef;
	caroselHeight: string;
	caroselIntervalId: any;

	constructor(private elementsService: ElementsService, private deviceDetector: DeviceDetectorService) { }

	ngOnInit() {
		if (!this.deviceDetector.isMobile() && window.innerWidth > 1024) {
			this.caroselHeight = window.innerHeight + 'px';
		}
		this.preloadImages();
	}

	ngAfterViewInit(): void {
		if (!this.deviceDetector.isMobile() && window.innerWidth > 1024) {
			setTimeout(() => {
				this.caroselHeight = window.innerHeight - (this.elementsService.getNavigationBarElementData().height +
					this.elementsService.getLogoElementData().height) + 'px';
			})
		}
		this.startCarosel();
	}

	preloadImages() {
		for (const slide of this.slides) {
			new Image().src = slide.src;
		}
	}

	startCarosel() {
		if (!this.caroselIntervalId) {
			this.caroselIntervalId = setInterval(() => {
				this.onNextClick();
			}, 5000);
		}
	}

	stopCarosel() {
		clearInterval(this.caroselIntervalId);
		this.caroselIntervalId = undefined;
	}

	onPreviousClick() {
		const previous = this.currentSlide - 1;
		this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
	}

	onCaroselButtonClicked(slide: any) {
		if (slide.button && slide.button.text === 'Contact Us') {
			window.location.href = "mailto:info@unitedmi.org";
		}
	}

	onNextClick() {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		if (!this.deviceDetector.isMobile() && window.innerWidth > 1024) {
			this.caroselHeight = window.innerHeight - (this.elementsService.getNavigationBarElementData().height +
				this.elementsService.getLogoElementData().height) + 'px';
		}
	}
}
