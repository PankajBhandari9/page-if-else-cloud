import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegistrationsComponent } from './new-user-registrations.component';

describe('NewUserRegistrationsComponent', () => {
  let component: NewUserRegistrationsComponent;
  let fixture: ComponentFixture<NewUserRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserRegistrationsComponent]
    });
    fixture = TestBed.createComponent(NewUserRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
