import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LandLinePaymentService } from '../../Sevices/LandLinePaymentService';

@Component({
  selector: 'app-land-line-payments',
  templateUrl: './land-line-payments.component.html',
  styleUrls: ['./land-line-payments.component.scss']
})
export class LandLinePaymentsComponent implements OnInit {
  LandPaymentsList:any[];
  ChannelsList:any[];
  SelectedChannel:any=-1;
  config: any;
  FilterForm: FormGroup;
  constructor(private p:LandLinePaymentService,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) { 
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems:0
      };
      route.queryParams.subscribe(
      params => this.config.currentPage= params['page']?params['page']:1 );
      this.getChannels();
    this.paymentsTotalCount();
    this.getChannelsPayments(this.config.currentPage,this.config.itemsPerPage,-1);
  }

  getChannelsPayments(newPage: number,pageSize :number ,channelId:any){
    this.p.GetAllChannelsByPage(newPage,pageSize,channelId).subscribe(response=>{
      this.LandPaymentsList=response;
      console.log('LandPaymentsList',this.LandPaymentsList);
    })
  }
  paymentsTotalCount(){
    this.p.PaymentsCount().subscribe(response=>{
      this.config.totalItems=response;
    })
  }

  paymentsFilterCount(pageNumber: number,pageSize :number ,channelId:any){
    this.p.PaymentsPagesCount(pageNumber,pageSize,channelId).subscribe(response=>{
      this.config.totalItems=response;
    })
  }
  
  pageChange(newPage: number) {
    this.config.currentPage=newPage;
    this.LandPaymentsList=[];
    this.paymentsFilterCount(newPage,this.config.itemsPerPage,this.SelectedChannel)
    this.getChannelsPayments(newPage,this.config.itemsPerPage,this.SelectedChannel);
   // this.router.navigate(['/landLine/MonthlyLandLine'], { queryParams: { page: newPage } });
  }


  getChannels(){
    this.p.GetChannels().subscribe(response=>{
      this.ChannelsList=response;
      console.log(this.ChannelsList);
    })
  }
  ngOnInit(): void {
    this.FilterForm = this.formBuilder.group({
			channelOption: [null, [Validators.required]],
		});
  }


  onChannelChange(channelValue:any) {
    this.SelectedChannel=channelValue.target.value
  }
  SubmitFilter(){
    //this.SelectedChannel=channelValue.target.value
    //this.paymentsCount();
    this.getChannelsPayments(1,this.config.itemsPerPage,this.SelectedChannel)
  }
}
