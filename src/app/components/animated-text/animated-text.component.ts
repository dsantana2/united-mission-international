import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
declare var anime: any;                                  // declare like this

@Component({
	selector: 'app-animated-text',
	templateUrl: './animated-text.component.html',
	styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit, AfterViewInit {
	@ViewChild('textElement') textElement: ElementRef;
	@Input() text: string;
	showText: boolean = false;

	ngOnInit() {

	}

	ngAfterViewInit(): void {
		this.textElement.nativeElement.innerHTML =
			this.textElement.nativeElement.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

		setTimeout(() => {
			anime.timeline({ loop: true })
				.add({
					targets: '.c2 .letter',
					scale: [0, 1],
					opacity: [0, 1],
					duration: 2500,
					elasticity: 600,
					delay: (el: any, i: number) => 45 * (i + 1)
				})
			this.showText = true;
		}, 2000)
	}
}
