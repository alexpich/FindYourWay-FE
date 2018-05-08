import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBBComponent } from './question-b-b.component';

describe('QuestionBBComponent', () => {
  let component: QuestionBBComponent;
  let fixture: ComponentFixture<QuestionBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
