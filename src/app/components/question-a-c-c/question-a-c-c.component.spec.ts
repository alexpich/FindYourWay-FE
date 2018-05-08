import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionACCComponent } from './question-a-c-c.component';

describe('QuestionACCComponent', () => {
  let component: QuestionACCComponent;
  let fixture: ComponentFixture<QuestionACCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionACCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionACCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
