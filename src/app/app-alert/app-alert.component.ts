import { AlertService } from './alert.service';
import { Alert } from './alert';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnInit, OnDestroy {

  alerts: Alert[] = [];
  private alerts$: Observable<Alert> = this.alertService.alerts$;
  private alertSubscription: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertSubscription = this.alerts$.subscribe(alert => {
      this.alerts = [...this.alerts, alert];
    });
  }

  ngOnDestroy() {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

}
