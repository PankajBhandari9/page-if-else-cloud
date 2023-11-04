import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-all',
  templateUrl: './app-all.component.html',
  styleUrls: ['./app-all.component.scss']
})
export class AppAllComponent implements OnInit {

  // constructor(private commonnService: CommonServcie, private _cardService: CommonServcie) { }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private commonnService: CommonServcie, private _commonService: CommonServcie) {
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

  tableData!: any[];
  newUser!: any[];
  topCards!: any[];

  ngOnInit(): void {
    this._commonService.getAppData().subscribe({
      next: (resp: any) => {
        this.topCards = resp['top_cards'];
        this.newUser = resp['new_users'];
        this.tableData = resp['recent_orders'];
      }
    })
  }

}
