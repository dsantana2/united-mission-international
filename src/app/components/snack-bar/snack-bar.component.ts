import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  snackBarRef = inject(MatSnackBarRef);
  text: string;

  ngOnInit(): void {
    this.text = this.snackBarRef.containerInstance.snackBarConfig.data;
    console.log(this.snackBarRef.containerInstance.snackBarConfig)
  }

}
