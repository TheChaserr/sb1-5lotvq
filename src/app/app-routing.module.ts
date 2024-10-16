import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { AdoptNestFormComponent } from './adopt-nest-form/adopt-nest-form.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { EducationalContentComponent } from './educational-content/educational-content.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NestingMapComponent } from './nesting-map/nesting-map.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'donate', component: DonationFormComponent },
  { path: 'adopt-nest', component: AdoptNestFormComponent },
  { path: 'news-events', component: NewsEventsComponent },
  { path: 'education', component: EducationalContentComponent },
  { path: 'gallery', component: PhotoGalleryComponent },
  { path: 'nesting-map', component: NestingMapComponent },
  { path: 'volunteer', component: VolunteerComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}