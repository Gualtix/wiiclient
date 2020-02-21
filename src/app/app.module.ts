import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { InfoComponent } from './components/info/info.component';
import { ReportsComponent } from './components/reports/reports.component';
import * as $ from 'jquery';
import { ExitComponent } from './components/exit/exit.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EnvioComponent } from './components/envio/envio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    CotizadorComponent,
    InfoComponent,
    ReportsComponent,
    ExitComponent,
    CalculadoraComponent,
    EnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
