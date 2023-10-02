import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ 
    CommonModule,
    RouterOutlet,
    RouterLink,
    AppHeaderComponent,
    AppNavComponent
  ]
})
export class AppComponent {

  private _usersService = inject(UsersService);

  ngOnInit() {
    this._usersService.initUsers();
  }
}
