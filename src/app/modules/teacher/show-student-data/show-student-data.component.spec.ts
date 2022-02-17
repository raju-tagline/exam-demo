import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentDataComponent } from './show-student-data.component';

describe('ShowStudentDataComponent', () => {
  let component: ShowStudentDataComponent;
  let fixture: ComponentFixture<ShowStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
