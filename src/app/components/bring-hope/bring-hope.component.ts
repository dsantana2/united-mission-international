import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
	selector: 'app-bring-hope',
	templateUrl: './bring-hope.component.html',
	styleUrls: ['./bring-hope.component.scss']
})
export class BringHopeComponent implements OnInit {
	viewPortHeight: number;
	constructor(private elementsService: ElementsService) { }

	ngOnInit(): void {
		this.viewPortHeight = this.elementsService.getViewPortData().height;

	}
}
