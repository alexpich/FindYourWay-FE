import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionABBComponent } from './question-a-b-b.component';

describe('QuestionABBComponent', () => {
  let component: QuestionABBComponent;
  let fixture: ComponentFixture<QuestionABBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionABBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionABBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
