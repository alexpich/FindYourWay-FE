import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBBBComponent } from './question-b-b-b.component';

describe('QuestionBBBComponent', () => {
  let component: QuestionBBBComponent;
  let fixture: ComponentFixture<QuestionBBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
