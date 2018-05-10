import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionABComponent } from './question-a-b.component';

describe('QuestionABComponent', () => {
  let component: QuestionABComponent;
  let fixture: ComponentFixture<QuestionABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
