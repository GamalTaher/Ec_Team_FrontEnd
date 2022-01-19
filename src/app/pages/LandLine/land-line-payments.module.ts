import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../_metronic/partials';
import { LandLinePaymentsComponent } from './land-line-payments/land-line-payments.component';
import { UploadLandLineReportComponent } from './upload-land-line-report/upload-land-line-report.component';
import { LandLineDifferenceComponent } from './land-line-difference/land-line-difference.component';

@NgModule({
  declarations: [LandLinePaymentsComponent, UploadLandLineReportComponent,LandLineDifferenceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'MonthlyLandLine',
        component: LandLinePaymentsComponent,
      },
      {
        path: 'UploadMonthlyLandLine',
        component: UploadLandLineReportComponent,
      },
      {
        path: 'MonthlyLandLineDiffirence',
        component: LandLineDifferenceComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class LandLinePaymentsModule {}
