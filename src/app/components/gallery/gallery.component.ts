import { Component, Input, OnInit } from '@angular/core';
import { MediaViewerService } from '../../services/media-viewer.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: any;
  @Input() gallery_design: any;


  constructor(private mediaViewerService: MediaViewerService) { }

  ngOnInit(): void {
  }

  openMediaViewer(index) {
    let mediaObj = {
      media: this.gallery,
      selectedMedia: index
    }

    this.mediaViewerService.openDialog('0ms', '0ms', mediaObj);
  }

}
