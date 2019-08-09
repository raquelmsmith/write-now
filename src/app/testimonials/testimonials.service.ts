import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  constructor(private http: HttpClient) {
    this.getTestimonials().subscribe(data => {
      console.log(data);
    });
  }
  public getTestimonials() {
    return this.http.get('../../assets/videos/video-details.json');
  }
}
