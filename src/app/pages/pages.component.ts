import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-main-layout>
    <router-outlet></router-outlet>
  </app-main-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
