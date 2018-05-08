import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAABComponent } from './question-a-a-b.component';

describe('QuestionAABComponent', () => {
  let component: QuestionAABComponent;
  let fixture: ComponentFixture<QuestionAABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
