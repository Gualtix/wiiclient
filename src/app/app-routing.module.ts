import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CotizadorComponent } from './components/cotizador/cotizador.component';
import {InfoComponent} from './components/info/info.component';
import {LoginComponent} from './components/login/login.component';
import {ReportsComponent} from './components/reports/reports.component';
import {ExitComponent } from './components/exit/exit.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cotizar',
    component: CotizadorComponent
  },
  {
    path: 'reportes',
    component: ReportsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'salir',
    component: ExitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
