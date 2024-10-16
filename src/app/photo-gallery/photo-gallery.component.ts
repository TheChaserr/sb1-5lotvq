import { Component, OnInit } from '@angular/core';
import { alert } from '@nativescript/core';
import { OkiSeaTurtleService } from '../services/oki-sea-turtle.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];

  constructor(private okiSeaTurtleService: OkiSeaTurtleService) {}

  ngOnInit() {
    this.okiSeaTurtleService.getPhotoGallery().subscribe(
      (data) => {
        this.photos = data;
      },
      (error) => {
        console.error('Error fetching photo gallery:', error);
      }
    );
  }

  onPhotoTap(photo: any) {
    alert({
      title: 'Photo Description',
      message: photo.description,
      okButtonText: 'OK'
    });
  }
}