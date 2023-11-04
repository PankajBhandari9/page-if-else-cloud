import { Component, ViewChild } from '@angular/core';
import { CommonServcie } from 'src/app/services/common-service.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-sales-statistics-chart',
  templateUrl: './sales-statistics-chart.component.html',
  styleUrls: ['./sales-statistics-chart.component.scss']
})
export class SalesStatisticsChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 29, 35, 51, 49, 62, 47]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: ""
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue",  "Wed",  "Thu",  "Fri",  "Sat"]
      }
    };
  }
}
