import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './components/contact/contact.component';
import { MissionsComponent } from './components/missions/missions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'meet-the-team', component: TeamComponent },
  // { path: 'missions', component: MissionsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
