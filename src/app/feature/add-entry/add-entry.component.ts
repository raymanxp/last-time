import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AddEntryService } from './add-entry.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss'],
  providers: [AddEntryService]
})
export class AddEntryComponent implements OnInit {
  readonly dateFormat = 'YYYY-MM-DD';
  title = 'The last time I...';
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private addEntryService: AddEntryService) { }

  ngOnInit() {
    this.entryForm = this.fb.group({
      action: new FormControl('', Validators.required),
      pronoun: new FormControl('', Validators.required),
      noun: new FormControl('', Validators.required),
      date: new FormControl(this.getTodaysDate(), Validators.required),
      lifeMilestone: new FormControl(false)
    });
  }

  private getTodaysDate(): string {
    return moment().format(this.dateFormat);
  }

  onAdd() {
    this.addEntryService.add(this.entryForm.value);
    this.entryForm.reset({date: this.getTodaysDate()});
  }

  isInvalidControl(control: string): boolean {
    return !this.entryForm.get(control).valid;
  }
}
