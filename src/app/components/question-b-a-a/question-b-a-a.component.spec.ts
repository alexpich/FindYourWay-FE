import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBAAComponent } from './question-b-a-a.component';

describe('QuestionBAAComponent', () => {
  let component: QuestionBAAComponent;
  let fixture: ComponentFixture<QuestionBAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
