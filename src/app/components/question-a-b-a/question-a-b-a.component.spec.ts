import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionABAComponent } from './question-a-b-a.component';

describe('QuestionABAComponent', () => {
  let component: QuestionABAComponent;
  let fixture: ComponentFixture<QuestionABAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionABAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionABAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
