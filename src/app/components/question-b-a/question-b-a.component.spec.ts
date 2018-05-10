import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBAComponent } from './question-b-a.component';

describe('QuestionBAComponent', () => {
  let component: QuestionBAComponent;
  let fixture: ComponentFixture<QuestionBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
