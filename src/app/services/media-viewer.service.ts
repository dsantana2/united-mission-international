import { Injectable } from '@angular/core';
import { MediaViewerComponent } from '../components/media-viewer/media-viewer.component';
import {
	MatDialog,
} from '@angular/material/dialog';

@Injectable({
	providedIn: 'root'
})
export class MediaViewerService {

	constructor(public dialog: MatDialog) { }

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
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
