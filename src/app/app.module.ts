import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { NewUserRegistrationsComponent } from './components/new-user-registrations/new-user-registrations.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { AppAllComponent } from './components/app-all/app-all.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesStatisticsChartComponent } from './components/sales-statistics-chart/sales-statistics-chart.component';
import { BalanceOverviewChartComponent } from './components/balance-overview-chart/balance-overview-chart.component';
import { TopProductsChartComponent } from './components/top-products-chart/top-products-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    TopCardComponent,
    NewUserRegistrationsComponent,
    RecentOrdersComponent,
    AppAllComponent,
    SideMenuComponent,
    AllCardsComponent,
    SalesStatisticsChartComponent,
    BalanceOverviewChartComponent,
    TopProductsChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
