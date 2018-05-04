import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBADComponent } from './question-b-a-d.component';

describe('QuestionBADComponent', () => {
  let component: QuestionBADComponent;
  let fixture: ComponentFixture<QuestionBADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
