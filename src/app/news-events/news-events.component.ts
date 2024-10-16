import { Component, OnInit } from '@angular/core';
import { alert } from '@nativescript/core';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
})
export class NewsEventsComponent implements OnInit {
  newsAndEvents: any[] = [];

  constructor(private okiSeaTurtleService: OkiSeaTurtleService) {}

  ngOnInit() {
    this.okiSeaTurtleService.getNewsAndEvents().subscribe(
      (data) => {
        this.newsAndEvents = data;
      },
      (error) => {
        console.error('Error fetching news and events:', error);
      }
    );
  }

  onRSVP(event: any) {
    alert({
      title: 'RSVP Confirmation',
      message: `Thank you for your interest in "${event.title}". We've recorded your RSVP and will send you more details soon.`,
      okButtonText: 'OK'
    });
  }
}