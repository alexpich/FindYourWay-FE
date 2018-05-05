import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAAComponent } from './question-a-a.component';

describe('QuestionAAComponent', () => {
  let component: QuestionAAComponent;
  let fixture: ComponentFixture<QuestionAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
