import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../_metronic/partials';
import { LandLinePaymentsComponent } from './land-line-payments/land-line-payments.component';
import { UploadLandLineReportComponent } from './upload-land-line-report/upload-land-line-report.component';
import { LandLineDifferenceComponent } from './land-line-difference/land-line-difference.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { NgxPaginationModule } from 'ngx-pagination';
>>>>>>> e385606fe65a47d346c9f26ceff321094ffeefb2

@NgModule({
  declarations: [LandLinePaymentsComponent, UploadLandLineReportComponent,LandLineDifferenceComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
=======
    NgxPaginationModule,
>>>>>>> e385606fe65a47d346c9f26ceff321094ffeefb2
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
