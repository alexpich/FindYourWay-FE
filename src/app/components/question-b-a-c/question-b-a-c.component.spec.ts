import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBACComponent } from './question-b-a-c.component';

describe('QuestionBACComponent', () => {
  let component: QuestionBACComponent;
  let fixture: ComponentFixture<QuestionBACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
