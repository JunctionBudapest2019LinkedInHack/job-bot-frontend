import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
