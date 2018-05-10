import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCBComponent } from './question-c-b.component';

describe('QuestionCBComponent', () => {
  let component: QuestionCBComponent;
  let fixture: ComponentFixture<QuestionCBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
