import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular/http-client';
import { NativeScriptFormsModule } from '@nativescript/angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { AdoptNestFormComponent } from './adopt-nest-form/adopt-nest-form.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { EducationalContentComponent } from './educational-content/educational-content.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NestingMapComponent } from './nesting-map/nesting-map.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    DonationFormComponent,
    AdoptNestFormComponent,
    NewsEventsComponent,
    EducationalContentComponent,
    PhotoGalleryComponent,
    NestingMapComponent,
    VolunteerComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}