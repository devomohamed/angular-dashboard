import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarData } from './nav-data';
import { INavItem } from '../../models/nav-item';
import { ISidenavToggle } from '../../models/sidenav-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule,BrowserAnimationsModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg',offset:'0'}),
          style({transform:'rotate(2turn',offset:'1'}),
        ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav:EventEmitter<ISidenavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData:INavItem[] = navbarData

  @HostListener('window:resize',['$event']) onResize(event:any){
    if (this.screenWidth <= 768) {
      this.collapsed = false
    }
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }
}
