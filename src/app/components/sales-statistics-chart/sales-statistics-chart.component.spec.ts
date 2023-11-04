import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatisticsChartComponent } from './sales-statistics-chart.component';

describe('SalesStatisticsChartComponent', () => {
  let component: SalesStatisticsChartComponent;
  let fixture: ComponentFixture<SalesStatisticsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesStatisticsChartComponent]
    });
    fixture = TestBed.createComponent(SalesStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
