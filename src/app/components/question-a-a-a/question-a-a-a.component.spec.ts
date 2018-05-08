import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAAAComponent } from './question-a-a-a.component';

describe('QuestionAAAComponent', () => {
  let component: QuestionAAAComponent;
  let fixture: ComponentFixture<QuestionAAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
