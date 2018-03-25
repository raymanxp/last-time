import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  title = 'The last time I...';
  entryForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log(this.entryForm.value);
  }
  isInvalidControl(control: string): boolean {
    return !this.entryForm.get(control).valid;
  }
}
