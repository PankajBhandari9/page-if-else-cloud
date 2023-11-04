import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAllComponent } from './app-all.component';

describe('AppAllComponent', () => {
  let component: AppAllComponent;
  let fixture: ComponentFixture<AppAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAllComponent]
    });
    fixture = TestBed.createComponent(AppAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
