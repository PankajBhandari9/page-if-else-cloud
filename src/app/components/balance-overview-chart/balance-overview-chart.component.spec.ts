import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceOverviewChartComponent } from './balance-overview-chart.component';

describe('BalanceOverviewChartComponent', () => {
  let component: BalanceOverviewChartComponent;
  let fixture: ComponentFixture<BalanceOverviewChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceOverviewChartComponent]
    });
    fixture = TestBed.createComponent(BalanceOverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
