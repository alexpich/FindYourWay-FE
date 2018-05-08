import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionACBComponent } from './question-a-c-b.component';

describe('QuestionACBComponent', () => {
  let component: QuestionACBComponent;
  let fixture: ComponentFixture<QuestionACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
