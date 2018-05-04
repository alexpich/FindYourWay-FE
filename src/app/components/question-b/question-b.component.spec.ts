import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBComponent } from './question-b.component';

describe('QuestionsBComponent', () => {
  let component: QuestionBComponent;
  let fixture: ComponentFixture<QuestionBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
