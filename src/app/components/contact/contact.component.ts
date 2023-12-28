import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import {
  MatSnackBar,

} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements AfterViewInit, OnInit {
  state: string = 'hidden';
  emailForm: FormGroup;
  durationInSeconds: number = 5;

  constructor(private http: HttpClient, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      data: 'Sent',
      panelClass: ['blue-snackbar']
    });
  }



  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'show';
    }, 200);
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mqkvroer',
      { name: this.emailForm.controls['name'].value, from: this.emailForm.controls['email'].value, replyto: this.emailForm.controls['email'].value, message: this.emailForm.controls['message'].value },
      { 'headers': headers }).subscribe(
        response => {
          this.openSnackBar();
          this.resetForm();
        }
      );
  }

  resetForm() {
    this.emailForm.reset();
  }
}



