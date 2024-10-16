import { Component, OnInit } from '@angular/core';
import { alert } from '@nativescript/core';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-educational-content',
  templateUrl: './educational-content.component.html',
})
export class EducationalContentComponent implements OnInit {
  educationalContent: any[] = [];

  constructor(private okiSeaTurtleService: OkiSeaTurtleService) {}

  ngOnInit() {
    this.okiSeaTurtleService.getEducationalContent().subscribe(
      (data) => {
        this.educationalContent = data;
      },
      (error) => {
        console.error('Error fetching educational content:', error);
      }
    );
  }

  onLearnMore(item: any) {
    alert({
      title: item.title,
      message: item.fullContent || 'Detailed content not available.',
      okButtonText: 'OK'
    });
  }
}