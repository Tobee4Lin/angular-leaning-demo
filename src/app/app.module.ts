import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownTimerComponent } from './CountdownTimer/CountdownTimer.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      VoterComponent,
      CountdownTimerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
