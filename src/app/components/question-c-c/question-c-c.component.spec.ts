import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCCComponent } from './question-c-c.component';

describe('QuestionCCComponent', () => {
  let component: QuestionCCComponent;
  let fixture: ComponentFixture<QuestionCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
