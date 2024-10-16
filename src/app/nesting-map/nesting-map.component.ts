import { Component, OnInit } from '@angular/core';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-nesting-map',
  templateUrl: './nesting-map.component.html',
})
export class NestingMapComponent implements OnInit {
  nestingSites: any[] = [];

  constructor(private okiSeaTurtleService: OkiSeaTurtleService) {}

  ngOnInit() {
    this.okiSeaTurtleService.getNestingSites().subscribe(
      (data) => {
        this.nestingSites = data;
      },
      (error) => {
        console.error('Error fetching nesting sites:', error);
      }
    );
  }
}