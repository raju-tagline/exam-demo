import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamPaperComponent } from './student-exam-paper.component';

describe('StudentExamPaperComponent', () => {
  let component: StudentExamPaperComponent;
  let fixture: ComponentFixture<StudentExamPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
