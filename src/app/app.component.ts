import { Component } from '@angular/core';
import { ISidenavToggle } from './core/models/sidenav-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSidenav(data:ISidenavToggle):void {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
