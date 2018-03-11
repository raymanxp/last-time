import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnInit {

  alerts: any[];

  constructor() { }

  ngOnInit() {
  }

}
