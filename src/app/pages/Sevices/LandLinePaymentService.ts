import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

 

@Injectable()

export class LandLinePaymentService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

     }
     
    GetAllChannels(): Observable<any> {
       return this.http.get(this.baseUrl + 'LandLinePayment/GetAll');    
    }
    GetAllChannelsByPage(pageNumber : number,pageSize: number,channelId:any): Observable<any> {
       if(channelId !=-1){
         return this.http.get(this.baseUrl + 'LandLinePayment/GetAllByPage?pageNumber='+pageNumber+'&&pageSize='+pageSize+'&&channelId='+channelId);    
       }
       else
       {
         return this.http.get(this.baseUrl + 'LandLinePayment/GetAllByPage?pageNumber='+pageNumber+'&&pageSize='+pageSize);    
       }
     }
     PaymentsCount(): Observable<any> {
        return this.http.get(this.baseUrl + 'LandLinePayment/PaymentsCount');    
     }

     PaymentsPagesCount(pageNumber : number,pageSize: number,channelId:any): Observable<any> {
      if(channelId !=-1){
         return this.http.get(this.baseUrl + 'LandLinePayment/PaymentsPagesCount?pageNumber='+pageNumber+'&&pageSize='+pageSize+'&&channelId='+channelId);    
       }
       else
       {
         return this.http.get(this.baseUrl + 'LandLinePayment/PaymentsPagesCount?pageNumber='+pageNumber+'&&pageSize='+pageSize);    
       }

   }
     GetChannels(): Observable<any> {
      return this.http.get(this.baseUrl + 'Channel/GetAllTiny');    
   }
}

 