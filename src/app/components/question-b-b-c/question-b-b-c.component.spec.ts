import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBBCComponent } from './question-b-b-c.component';

describe('QuestionBBCComponent', () => {
  let component: QuestionBBCComponent;
  let fixture: ComponentFixture<QuestionBBCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBBCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
