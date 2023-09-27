import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
			BrowserModule,
			HttpClientModule,
    ),
    provideRouter(routes),
  ]
});
