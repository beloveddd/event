import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule}  from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'event-registration',
  standalone: true,
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss'],
  imports: [ ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule ],
})
export class EventRegistrationComponent {
  registrationForm!: FormGroup;

  private _fb = inject(FormBuilder);

  ngOnInit() {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      registrationType: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitRegistrationForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
