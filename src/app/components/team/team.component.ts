import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMemberArr: { name: string, position: string }[] = [
    { name: 'Jose Santana', position: 'Founder and Chief Executive Officer' },
    { name: 'Andrew Peret', position: 'Founder and Chief Operating Officer' },
    { name: 'Yolanda Acevedo', position: 'Project Development Manager' },
    { name: 'Francisco Terón', position: 'Field Operations Supervisor' },
    { name: 'Johanna Fraguada', position: 'Online Activist' },
    { name: 'Oddi Diaz', position: 'Field Operations Supervisor' },
    { name: 'Ashton Santana', position: 'Director of Operations' },



  ];

}
