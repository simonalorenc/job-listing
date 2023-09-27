import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTimeCharactersComponent } from './job-time-characters.component';

describe('JobTimeCharactersComponent', () => {
  let component: JobTimeCharactersComponent;
  let fixture: ComponentFixture<JobTimeCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobTimeCharactersComponent]
    });
    fixture = TestBed.createComponent(JobTimeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
