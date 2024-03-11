import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
	selector: 'app-next-mission',
	templateUrl: './next-mission.component.html',
	styleUrls: ['./next-mission.component.scss']
})
export class NextMissionComponent implements OnInit, AfterViewInit {
	viewPortHeight: number;
	viewPortWidth: number;
	page: string = 'center';
	@ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
	gallery: any = [
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
			text: '',
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
			text: '',
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
			text: '',
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
			text: '',
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		},
		{
			src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
			text: ''
		}
	];

	constructor(private elementsService: ElementsService, private cd: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.viewPortHeight = this.elementsService.getViewPortData().height;
		this.viewPortWidth = this.elementsService.getViewPortData().width;
	}

	ngAfterViewInit(): void {
		this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + this.viewPortWidth) });
	}

	public scrollRight(): void {
		this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + this.viewPortWidth), behavior: 'smooth' });

		if (this.page === 'center') {
			this.page = 'right';
		} else if (this.page === 'left') {
			this.page = 'center';
		}

	}

	public scrollLeft(): void {
		this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - this.viewPortWidth), behavior: 'smooth' });

		if (this.page === 'center') {
			this.page = 'left';
		} else if (this.page === 'right') {
			this.page = 'center';
		}
	}

	updateScreenInView() {
		if (this.widgetsContent.nativeElement.scrollLeft === 0) {
			this.page = 'left';
		} else if (this.widgetsContent.nativeElement.scrollLeft === this.viewPortWidth) {
			this.page = 'center';
		} else if (this.widgetsContent.nativeElement.scrollLeft === this.viewPortWidth * 2) {
			this.page = 'right';
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.viewPortHeight = this.elementsService.getViewPortData().height - this.elementsService.getNavigationBarElementData().height;
		this.viewPortWidth = this.elementsService.getViewPortData().width;
		this.widgetsContent.nativeElement.scrollTo({ left: (this.page === 'left' ? (0) : this.page === 'center' ? (this.viewPortWidth) : (this.viewPortWidth * 2)), behavior: 'smooth' });
	}
}
