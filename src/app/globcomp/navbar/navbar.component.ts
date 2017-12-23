import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    let menu = document.getElementById('main-menu');
    if (number < 20) {
      menu.classList.remove('mat-elevation-z12');
      menu.classList.remove('nav-colored');
    }else{
      menu.classList.add('mat-elevation-z12');
      menu.classList.add('nav-colored');
    }
  }
}
