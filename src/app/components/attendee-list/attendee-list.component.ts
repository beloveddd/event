import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';

import { User } from 'src/app/shared/interfaces/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'attendee-list',
  standalone: true,
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.scss'],
  imports: [ MatTableModule, TitleCasePipe, DatePipe, MatSortModule ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttendeeListComponent {
  displayedColumns: string[] = ['name', 'email', 'phone', 'registrationType', 'date'];
  users!: MatTableDataSource<User, MatTableDataSourcePaginator>;

  @ViewChild(MatSort) sort!: MatSort;

  private _usersService = inject(UsersService);
  private _liveAnnouncer = inject(LiveAnnouncer);

  ngOnInit() {
    this._usersService.initUsers();
    this.users = new MatTableDataSource(this._usersService.users);
  }

  ngAfterViewInit() {
    this.users.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
