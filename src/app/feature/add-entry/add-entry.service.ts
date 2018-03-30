import { Entry } from './entry';
import { AlertService } from './../../app-alert/alert.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppAlert, AlertType } from '../../app-alert/alert';

@Injectable()
export class AddEntryService {

  constructor(private alertService: AlertService) { }

  add(entry: Entry) {
    const alert = new AppAlert();
    alert.message = 'Added entry!';
    alert.type = AlertType.Success;
    this.alertService.add(alert);
  }
}
