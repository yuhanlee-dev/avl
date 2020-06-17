import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-entry-box',
  templateUrl: './entry-box.component.html',
  styleUrls: ['./entry-box.component.scss'],
})
export class EntryBoxComponent implements OnInit {
  @Output() isValid = new EventEmitter<boolean>();
  entryBox = new FormGroup({});
  numberBoxList = ['1', '2', '3', '4'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.entryBox.statusChanges.subscribe((val) => {
      switch (val) {
        case 'VALID':
          this.isValid.emit(true);
          break;
        case 'INVALID':
          this.isValid.emit(false);
          break;
      }
    });
  }

  isEmpty(controlName) {
    return this.entryBox.controls[controlName].value ? false : true;
  }

  setFocus(bool, element) {
    if (bool) {
      element.classList.add('border-gradient');
    } else {
      element.classList.remove('border-gradient');
    }
  }

  createForm() {
    this.numberBoxList.forEach((index) => {
      this.entryBox.addControl(
        `number${index}`,
        this.fb.control('', [
          Validators.required,
          Validators.pattern('[0-9.\\\\]'),
        ])
      );
    });
  }
}
