import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeroesModule,
    DashboardModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
