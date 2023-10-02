import { Routes } from '@angular/router';

import { EventRegistrationComponent } from './components/event-registration/event-registration.component';
import { AttendeeListComponent } from './components/attendee-list/attendee-list.component';

export const routes: Routes = [
  {
		path: 'event-registration',
		component: EventRegistrationComponent,
	},
	{
		path: 'attendee-list',
		component: AttendeeListComponent
	},
  {
    path: '',
    redirectTo: '/event-registration',
    pathMatch: 'full'},
];
