import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {



  openX() {
    window.open('https://twitter.com/united_int');
  }

  openFacebook() {
    window.open('https://www.facebook.com/search/top?q=united%20mission%20international');
  }

  openIntagrame() {
    window.open('https://www.instagram.com/united_mission_int/');
  }

  sendEmail() {
    window.location.href = "mailto:info@unitedmi.org";
  }
}
