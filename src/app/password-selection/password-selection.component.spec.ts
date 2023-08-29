import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSelectionComponent } from './password-selection.component';

describe('PasswordSelectionComponent', () => {
  let component: PasswordSelectionComponent;
  let fixture: ComponentFixture<PasswordSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
