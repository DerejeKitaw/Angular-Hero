import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainLayoutComponent
  ],
  declarations: [MainLayoutComponent]
})
export class ThemeModule { }
