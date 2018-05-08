import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionACAComponent } from './question-a-c-a.component';

describe('QuestionACAComponent', () => {
  let component: QuestionACAComponent;
  let fixture: ComponentFixture<QuestionACAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionACAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionACAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
