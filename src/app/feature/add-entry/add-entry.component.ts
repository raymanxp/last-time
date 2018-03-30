import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AddEntryService } from './add-entry.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss'],
  providers: [AddEntryService]
})
export class AddEntryComponent implements OnInit {
  title = 'The last time I...';
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private addEntryService: AddEntryService) { }

  ngOnInit() {
    this.entryForm = this.fb.group({
      action: new FormControl('', Validators.required),
      pronoun: new FormControl('', Validators.required),
      noun: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      lifeMilestone: new FormControl(false)
    });
  }

  onAdd() {
    this.addEntryService.add(this.entryForm.value);
    this.entryForm.reset();
  }

  isInvalidControl(control: string): boolean {
    return !this.entryForm.get(control).valid;
  }
}
