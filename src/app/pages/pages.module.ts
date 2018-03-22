import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeroesModule,
    DashboardModule,
    ThemeModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
