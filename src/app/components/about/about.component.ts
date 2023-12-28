import { AfterViewInit, Component, HostListener, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ElementsService } from 'src/app/services/elements.service';
import { MediaViewerService } from '../../services/media-viewer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        opacity: 1
      })
      ), state('hidden', style({
        opacity: 0,
      })
      ), transition('shown => hidden', [
        animate('1s')
      ]),
      transition('hidden => show', [
        animate('1s')
      ]),
    ])
  ]
})
export class AboutComponent implements AfterViewInit, OnInit {
  state: string = 'hidden';
  viewPortHeight: number = 0;
  showImage: boolean = false;
  images = [
    { src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp' },
    { src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp' },
    { src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp' },
    { src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp' }]

  constructor(private mediaViewerService: MediaViewerService) { }
  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 300) {
      this.showImage = true;
    } else {
      this.showImage = false;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewPortHeight = window.innerHeight;
      this.state = 'show';
    }, 200);
  }

  openMediaViewer(index) {
    let mediaObj = {
      media: this.images,
      selectedMedia: index
    }
    this.mediaViewerService.openDialog('0ms', '0ms', mediaObj);
  }
}
