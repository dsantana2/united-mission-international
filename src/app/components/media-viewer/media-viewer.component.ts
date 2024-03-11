import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { Inject } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, scaleIn, scaleOut } from '../carousel/carosel.animations';
@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ]),
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class MediaViewerComponent implements OnInit {
  slides: { src: string, text?: string }[];
  currentSlide = 0;
  layoutView: 'image' | 'description' = 'image';

  constructor(public dialogRef: MatDialogRef<MediaViewerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.slides = this.data.media;
    this.currentSlide = this.data.selectedMedia;
  }

  closeModal() {
    this.dialogRef.close();
  }

  changeLayout(layoutView: 'image' | 'description') {
    this.layoutView = layoutView;
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
