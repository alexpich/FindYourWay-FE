import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionACComponent } from './question-a-c.component';

describe('QuestionACComponent', () => {
  let component: QuestionACComponent;
  let fixture: ComponentFixture<QuestionACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
