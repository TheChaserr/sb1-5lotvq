import { Component, OnInit } from '@angular/core';
import { alert } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
})
export class VolunteerComponent implements OnInit {
  volunteerOpportunities: any[] = [];

  constructor(
    private routerExtensions: RouterExtensions,
    private okiSeaTurtleService: OkiSeaTurtleService
  ) {}

  ngOnInit() {
    this.okiSeaTurtleService.getVolunteerOpportunities().subscribe(
      (data) => {
        this.volunteerOpportunities = data;
      },
      (error) => {
        console.error('Error fetching volunteer opportunities:', error);
      }
    );
  }

  onSignUp(opportunity: any) {
    alert({
      title: 'Volunteer Sign Up',
      message: `Thank you for your interest in volunteering as a ${opportunity.title}. We'll contact you soon with more information.`,
      okButtonText: 'OK'
    });
  }

  onContactUs() {
    this.routerExtensions.navigate(['/contact'], {
      transition: {
        name: 'fade',
      },
    });
  }
}