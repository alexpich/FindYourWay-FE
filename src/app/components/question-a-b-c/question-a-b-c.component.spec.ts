import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionABCComponent } from './question-a-b-c.component';

describe('QuestionABCComponent', () => {
  let component: QuestionABCComponent;
  let fixture: ComponentFixture<QuestionABCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionABCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
