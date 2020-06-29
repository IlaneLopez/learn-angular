import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [{
    name: 'Tasks',
    path: '/tasks'
  },
  {
    name: 'New',
    path: '/new'
  }
  ]

  constructor() {
  
  }

  ngOnInit(): void {
  }

}
