import { Injectable } from '@angular/core';
import { MediaViewerComponent } from '../components/media-viewer/media-viewer.component';
import { MobileMediaViewerComponent } from '../components/mobile-media-viewer/mobile-media-viewer.component';
import {
	MatDialog,
} from '@angular/material/dialog';
import { DeviceDetectorService } from '../services/device-detection.service'

@Injectable({
	providedIn: 'root'
})
export class MediaViewerService {

	constructor(public dialog: MatDialog, private deviceDetector: DeviceDetectorService) { }

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
		if (this.deviceDetector.isMobile()) {
			this.dialog.open(MobileMediaViewerComponent, {
				maxWidth: '95vw',
				maxHeight: '95vh',
				height: '100%',
				width: '100%',
				data: data,
				enterAnimationDuration,
				exitAnimationDuration,
			});
		} else {
			this.dialog.open(MediaViewerComponent, {
				maxWidth: '95vw',
				maxHeight: '95vh',
				height: '100%',
				width: '100%',
				data: data,
				enterAnimationDuration,
				exitAnimationDuration,
			});
		}
	}
}
