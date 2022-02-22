import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedStudentComponent } from './verified-student.component';

describe('VerifiedStudentComponent', () => {
  let component: VerifiedStudentComponent;
  let fixture: ComponentFixture<VerifiedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
