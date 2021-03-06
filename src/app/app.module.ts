import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownTimerComponent } from './CountdownTimer/CountdownTimer.component';
import { HighlightDirective } from './highlight.directive';
import { PipeCompComponent } from './pipe-comp/pipe-comp.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      VoterComponent,
      CountdownTimerComponent,
      HighlightDirective,
      PipeCompComponent
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
