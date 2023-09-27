import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'event-registration',
  standalone: true,
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss'],
  imports: [ ReactiveFormsModule ],
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
