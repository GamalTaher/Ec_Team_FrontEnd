import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

 

@Injectable()

export class LandLinePaymentService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }


    GetAllChannels(): Observable<any> {
       return this.http.get(this.baseUrl + 'api/LandLinePayment/GetAll');    
    }
   

   
}

 