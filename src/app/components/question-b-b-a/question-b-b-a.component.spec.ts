import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBBAComponent } from './question-b-b-a.component';

describe('QuestionBBAComponent', () => {
  let component: QuestionBBAComponent;
  let fixture: ComponentFixture<QuestionBBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
