/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestimonialsService } from './testimonials.service';

describe('Service: Testimonials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestimonialsService]
    });
  });

  it('should ...', inject([TestimonialsService], (service: TestimonialsService) => {
    expect(service).toBeTruthy();
  }));
});
