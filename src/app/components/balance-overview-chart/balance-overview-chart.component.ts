import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-balance-overview-chart',
  templateUrl: './balance-overview-chart.component.html',
  styleUrls: ['./balance-overview-chart.component.scss']
})
export class BalanceOverviewChartComponent {
  @ViewChild("chart") stackChart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [49, 55, 41, 37, 22, 43, 85, 95, 28, 44, 59, 63]
        },
        {
          name: "Borrow",
          data: [12, 32, 33, 23, 13, 25, 32, 69, 18, 12, 27, 30]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: ""
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        // labels: {
        //   formatter: function(val) {
        //     return val + "K";
        //   }
        // }
      },
      yaxis: {
        title: {
          text: undefined
        },
        labels: {
          // formatter: function(val) {
          //   return val + "K";
          // }
        }
      },
      tooltip: {
        y: {
          // formatter: function(val) {
          //   return val + "K";
          // }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
}
