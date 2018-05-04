import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBABComponent } from './question-b-a-b.component';

describe('QuestionBABComponent', () => {
  let component: QuestionBABComponent;
  let fixture: ComponentFixture<QuestionBABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
