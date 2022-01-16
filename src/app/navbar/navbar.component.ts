import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label:'Login',     linkTo:'/login', icon:'login',          showOnDesktop:true, showOnTablet:true, showOnMobile:true },
    { label:'About',     linkTo:'/about', icon:'help',           showOnTablet:true },
    { label:'Hospitals', linkTo:'/hospitals', icon:'local_hospital', showOnDesktop:true },
  ];
}
