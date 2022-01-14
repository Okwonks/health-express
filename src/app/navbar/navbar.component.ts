import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label:'Login',     icon:'login',          showOnDesktop:true, showOnTablet:true, showOnMobile:true },
    { label:'About',     icon:'help',           showOnTablet:true },
    { label:'Hospitals', icon:'local_hospital', showOnDesktop:true },
  ];
}
