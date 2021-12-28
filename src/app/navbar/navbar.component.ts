import { Component, NgModule, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    { label:'Login',     icon:'login', showOnDesktop:true, shownOnTablet:true, showOnMobile:true },
    { label:'About',     icon:'help', shownOnTablet:true },
    { label:'Hospitals', icon:'local_hospital', showOnDesktop:true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
