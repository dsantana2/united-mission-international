import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MobileMenuService {
	openHideMobileMenu = new Subject<any>();
	constructor() { }

}
