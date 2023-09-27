import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { User } from 'src/app/shared/interfaces/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'attendee-list',
  standalone: true,
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.scss'],
  imports: [ MatTableModule, TitleCasePipe, DatePipe ],
})
export class AttendeeListComponent {
  displayedColumns: string[] = ['name', 'email', 'phone', 'registrationType', 'date'];
  users!: User[];

  private _usersService = inject(UsersService);

  ngOnInit() {
    this._usersService.initUsers();
    this.users = this._usersService.users;
  }
}
