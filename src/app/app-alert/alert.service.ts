import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert, AppAlert } from './alert';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertService {

  private alerts = new Subject();
  alerts$: Observable<Alert> = this.alerts.asObservable() as Observable<Alert>;

  constructor() { }

  add(alert: AppAlert): void {
    if (!environment.production) {
      console.log(alert);
    }
    this.alerts.next(alert);
  }

}
