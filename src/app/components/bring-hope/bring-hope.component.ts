import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { DeviceDetectorService } from '../../services/device-detection.service'

@Component({
	selector: 'app-bring-hope',
	templateUrl: './bring-hope.component.html',
	styleUrls: ['./bring-hope.component.scss']
})
export class BringHopeComponent implements OnInit {
	viewPortHeight: number;
	constructor(private elementsService: ElementsService, private deviceDetector: DeviceDetectorService) { }

	ngOnInit(): void {
		if (!this.deviceDetector.isMobile() && window.innerWidth > 1024) {
			this.viewPortHeight = this.elementsService.getViewPortData().height;
		}
	}
}
