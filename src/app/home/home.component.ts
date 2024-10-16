import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  latestUpdates: any[] = [];

  constructor(
    private routerExtensions: RouterExtensions,
    private okiSeaTurtleService: OkiSeaTurtleService
  ) {}

  ngOnInit() {
    this.okiSeaTurtleService.getLatestUpdates().subscribe(
      (data) => {
        this.latestUpdates = data;
      },
      (error) => {
        console.error('Error fetching latest updates:', error);
      }
    );
  }

  onLearnMoreTap() {
    this.routerExtensions.navigate(['/education'], {
      transition: {
        name: 'fade',
      },
    });
  }
}