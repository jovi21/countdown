import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ContainerComponent } from './components/container/container.component';
import { TurtleComponent } from './components/turtle/turtle.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { RainComponent } from './components/rain/rain.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CountdownComponent, ContainerComponent, TurtleComponent, ProposalComponent, RainComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
