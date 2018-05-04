import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCComponent } from './question-c.component';

describe('QuestionCComponent', () => {
  let component: QuestionCComponent;
  let fixture: ComponentFixture<QuestionCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
