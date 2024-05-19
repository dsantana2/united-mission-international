import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DeviceDetectorService {

	constructor() { }

	isMobile() {
		return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	}
}
