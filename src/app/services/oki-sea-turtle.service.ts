import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OkiSeaTurtleService {
  private apiUrl = 'https://api.okiseaturtle.org'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  getLatestUpdates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/updates`);
  }

  getNewsAndEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news-events`);
  }

  getEducationalContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/educational-content`);
  }

  getPhotoGallery(): Observable<any> {
    return this.http.get(`${this.apiUrl}/photo-gallery`);
  }

  getNestingSites(): Observable<any> {
    return this.http.get(`${this.apiUrl}/nesting-sites`);
  }

  getVolunteerOpportunities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/volunteer-opportunities`);
  }
}