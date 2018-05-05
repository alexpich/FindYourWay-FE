import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCAComponent } from './question-c-a.component';

describe('QuestionCAComponent', () => {
  let component: QuestionCAComponent;
  let fixture: ComponentFixture<QuestionCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
