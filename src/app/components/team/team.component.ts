import { AfterViewInit, Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
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
export class TeamComponent implements AfterViewInit {
  state: string = 'hidden';
  teamMemberArr: { name: string, position: string, src: string }[] = [
    { name: 'Jose Santana', position: 'Founder and Chief Executive Officer', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/UMJose_edited.webp' },
    { name: 'Andrew Peret', position: 'Founder and Chief Operating Officer', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/andrew.webp' },
    { name: 'Yolanda Acevedo', position: 'Project Development Manager', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/Yolli+UM+foto.webp' },
    { name: 'Francisco Terón', position: 'Field Operations Supervisor', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/teron.webp' },
    { name: 'Johanna Fraguada', position: 'Online Activist', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/UMJohanna.webp' },
    { name: 'Oddi Diaz', position: 'Field Operations Supervisor', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/Oddi+Diaz_pic3.webp' },
    { name: 'Ashton Santana', position: 'Director of Operations', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/ashton.webp' },
    { name: 'Kristina Santana', position: 'Director of Social Media', src: 'https://d337lrhmtj9qpq.cloudfront.net/team/FD0C739B-06AF-4A4E-A52E-A532C5D70B85.jpeg' },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'show';
    }, 200);
  }

}
