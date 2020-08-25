import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import { Payment} from './payment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }
 
  public getAllPayments(): Observable<Payment[]> {
    return this.http
      .get(API_URL + '/payments')
      .pipe(map(response => {
        const payments = response.json();
        return payments.pipe(map((payment) => new Payment(payment)));
      }));
      // .catch(this.handleError);
  }

  public createPayment(payment: Payment): Observable<Payment> {
    return this.http
      .post(API_URL + '/payments', payment)
      .pipe(map(response => {
        return new Payment(response.json());
      }));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}