import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit{

  @Input() tableData!:any[];

  ngOnInit(): void {
  }

}
