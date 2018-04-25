import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  route: string;
  sidebarState: boolean = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != ''){
        this.route = location.path();
      } else {
        this.route = '/'
      }
    });
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarState = !this.sidebarState;
  }

}
