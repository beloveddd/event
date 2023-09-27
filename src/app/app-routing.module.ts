import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
