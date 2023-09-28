import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule}  from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'event-registration',
  standalone: true,
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss'],
  imports: [ 
    CommonModule,
    ReactiveFormsModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatCardModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventRegistrationComponent {
  @ViewChild('formDirective') formDirective!: FormGroupDirective;

  registrationForm!: FormGroup;
  minDate!: Date;

  private _fb = inject(FormBuilder);
  private _usersService = inject(UsersService);

  ngOnInit() {
    this._usersService.initUsers();
    this.initForm();
  }

  initForm() {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^[\+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/)],
      registrationType: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.minDate = new Date();
  }

  submitRegistrationForm() {
    if (!this.registrationForm.valid) {
      return;
    }

    this._usersService.addUserToUsersCollection(this.registrationForm.value);
    this.formDirective.resetForm();
    this.registrationForm.reset();
  }
}
