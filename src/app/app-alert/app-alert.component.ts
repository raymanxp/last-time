import { AlertService } from './alert.service';
import { Alert, AppAlert } from './alert';
import { Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef, AfterViewInit, Renderer, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnInit, OnDestroy, AfterContentInit {
  @ViewChild('clr-alerts') clrAlerts: ElementRef;
  alerts: Alert[] = [];
  private alerts$: Observable<Alert> = this.alertService.alerts$;
  private alertSubscription: Subscription;

  constructor(private alertService: AlertService, private renderer: Renderer) { }

  ngOnInit() {
    this.alertSubscription = this.alerts$.subscribe((alert: AppAlert) => {
      this.alerts = [...this.alerts, alert];
      alert.startTimeout();
    });
  }

  ngOnDestroy() {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

  ngAfterContentInit() {
    this.renderer.invokeElementMethod(this.clrAlerts.nativeElement, 'scrollIntoView');
  }

}
