
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressInfo, StatsProgressBarData } from '../../../@core/data/stats-progress-bar';

import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {

  listOfRavenue:any[];

  listOfSales:any[];

  
  listOfprofit:any[];

  private alive = true;

  progressInfoData: ProgressInfo[];

  totalRevenue = 0;

  revenueProgress = 0;

  totalSales = 0;

  totalSalesProgress = 0;

  totalProfit = 0;



  constructor(private statsProgressBarService: StatsProgressBarData, ) {
  
    
  }


  ngOnDestroy() {
    this.alive = true;
  }


  
}
