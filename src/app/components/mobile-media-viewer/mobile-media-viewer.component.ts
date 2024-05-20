import { AfterViewInit, Component, ElementRef, ChangeDetectorRef, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-media-viewer',
  templateUrl: './mobile-media-viewer.component.html',
  styleUrls: ['./mobile-media-viewer.component.scss']
})
export class MobileMediaViewerComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider: ElementRef;
  @ViewChild('sliderItems') sliderItems: ElementRef;
  @ViewChild('prev') prev: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('sliderwrapper') sliderwrapper: ElementRef;
  @ViewChild('slide') slide: ElementRef;
  sliderwrapperWidth: string;
  slidesWidth: string;
  slides: { src: string, text?: string }[];
  currentSlide = 0;
  slideIndex: number = 0;
  slidesLength: number;
  slideSize: number;
  posInitial: number = 0;
  posFinal: number;
  threshold: number = 100;
  allowShift: boolean = true;
  posX1: number = 0;
  posX2: number = 0;
  event: string = '';
  currentPos: number;
  showCarosel: boolean = false;
  constructor(public dialogRef: MatDialogRef<MobileMediaViewerComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sliderwrapper.nativeElement.style.width = this.sliderwrapper.nativeElement.getBoundingClientRect().width + 'px';
      this.sliderwrapperWidth = this.sliderwrapper.nativeElement.getBoundingClientRect().width + 'px';
      this.slidesWidth = this.sliderwrapper.nativeElement.getBoundingClientRect().width * (this.slides.length - 1) + 'px';
      this.sliderItems.nativeElement.style.width = this.slidesWidth;
      Array.from(this.sliderItems.nativeElement.children).forEach((element: any) => {
        element.style['min-width'] = this.sliderwrapperWidth;
      });

      this.loadSlider();
      this.showCarosel = true;
    }, 0);

  }
  ngOnInit(): void {
    this.slides = this.data.media;
    this.currentSlide = this.data.selectedMedia;

  }

  loadSlider() {
    this.slidesLength = this.slides.length - 1;
    this.slideSize = this.sliderItems.nativeElement.getElementsByClassName('slide')[0].offsetWidth;
    this.slider.nativeElement.classList.add('loaded');
    this.slideIndex = this.data.selectedMedia;
    // Mouse events
    this.sliderItems.nativeElement.onmousedown = this.dragStart;

    // // Touch events
    this.sliderItems.nativeElement.addEventListener('touchstart', (e) => { this.event = 'touch'; this.dragStart(e) });
    this.sliderItems.nativeElement.addEventListener('touchend', (e) => { this.dragEnd(e) });
    this.sliderItems.nativeElement.addEventListener('touchmove', (e) => { this.dragAction(e) });
    this.sliderItems.nativeElement.addEventListener('transitionend', () => { this.checkIndex() });

    this.prev.nativeElement.addEventListener('click', () => { this.event = 'click'; });
    this.next.nativeElement.addEventListener('click', () => { this.event = 'click'; });
    this.sliderItems.nativeElement.style.left = (this.posInitial - (this.slideSize * this.currentSlide)) + "px";
  }

  dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    this.posInitial = this.sliderItems.nativeElement.offsetLeft;

    if (e.type == 'touchstart') {
      this.posX1 = e.touches[0].clientX;
    } else {
      this.posX1 = e.clientX;
      document.onmouseup = this.dragEnd;
      document.onmousemove = this.dragAction;
    }
  }

  dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      this.posX2 = this.posX1 - e.touches[0].clientX;
      this.posX1 = e.touches[0].clientX;
    } else {
      this.posX2 = this.posX1 - e.clientX;
      this.posX1 = e.clientX;
    }

    if (this.slideIndex == this.slidesLength && this.posX2 > 0 || this.slideIndex == 0 && this.posX2 < 0) return;
    this.sliderItems.nativeElement.style.left = (this.sliderItems.nativeElement.offsetLeft - this.posX2) + "px";
  }

  dragEnd(e) {
    this.posFinal = this.sliderItems.nativeElement.offsetLeft;
    if (this.posFinal - this.posInitial < -this.threshold) {
      this.shiftSlide(1, 'drag');
    } else if (this.posFinal - this.posInitial > this.threshold) {
      this.shiftSlide(-1, 'drag');
    } else {
      this.sliderItems.nativeElement.style.left = (this.posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  checkIndex() {
    this.sliderItems.nativeElement.classList.remove('shifting');
    if (this.event === 'click') return;

    if (this.slideIndex == -1) {
      this.sliderItems.nativeElement.style.left = -(this.slidesLength * this.slideSize) + "px";
      this.slideIndex = this.slidesLength - 1;
    }

    this.allowShift = true;
  }

  shiftSlide(dir, action) {
    this.sliderItems.nativeElement.classList.add('shifting');

    if (!action) { this.posInitial = this.sliderItems.nativeElement.offsetLeft; }

    if (dir == 1 && this.slideIndex < this.slidesLength) {
      this.sliderItems.nativeElement.style.left = (this.posInitial - this.slideSize) + "px";
      this.slideIndex++;
    } else if (dir == -1 && this.slideIndex >= 1) {
      this.sliderItems.nativeElement.style.left = (this.posInitial + this.slideSize) + "px";
      this.slideIndex--;
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
