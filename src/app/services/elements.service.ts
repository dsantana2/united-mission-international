import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ElementsService {
	navigationBarElementData?: { height: number, width: number };
	logoElementData: { height: number, width: number };
	viewPortData: { height: number, width: number };

	constructor() { }

	getNavigationBarElementData() {
		return this.navigationBarElementData;
	}

	getLogoElementData() {
		return this.logoElementData;
	}

	getViewPortData() {
		this.viewPortData = { width: window.innerWidth, height: window.innerHeight }
		return this.viewPortData;
	}
}
