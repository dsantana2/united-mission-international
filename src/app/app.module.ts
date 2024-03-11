import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NextMissionComponent } from './components/next-mission/next-mission.component';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';
import { MissionsComponent } from './components/missions/missions.component';
import { BibleVerseComponent } from './components/bible-verse/bible-verse.component';
import { BringHopeComponent } from './components/bring-hope/bring-hope.component';
import { HomePageScrollActionDirective } from './directive/home-page-scroll-action.directive';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MediaViewerComponent } from './components/media-viewer/media-viewer.component';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { MobileMediaViewerComponent } from './components/mobile-media-viewer/mobile-media-viewer.component';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    DonateComponent,
    ContactComponent,
    NavigationBarComponent,
    FooterComponent,
    CarouselComponent,
    NextMissionComponent,
    AnimatedTextComponent,
    MissionsComponent,
    BibleVerseComponent,
    BringHopeComponent,
    HomePageScrollActionDirective,
    OurMissionComponent,
    SnackBarComponent,
    MediaViewerComponent,
    MobileMediaViewerComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
