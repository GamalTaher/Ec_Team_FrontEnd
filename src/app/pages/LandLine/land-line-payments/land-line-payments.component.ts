import { Component, HostBinding, OnInit } from '@angular/core';
import { LandLinePaymentService } from '../../Sevices/LandLinePaymentService';

@Component({
  selector: 'app-land-line-payments',
  templateUrl: './land-line-payments.component.html',
  styleUrls: ['./land-line-payments.component.scss']
})
export class LandLinePaymentsComponent implements OnInit {
  // @HostBinding('class') class =
  //   'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px';
  // @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  LandPaymentsList:any
  constructor(private p:LandLinePaymentService) { }

  ngOnInit(): void {
    this.p.GetAllChannels().subscribe(response=>{
      this.LandPaymentsList=response;
      console.log('LandPaymentsList',this.LandPaymentsList);
    })

  }

}
