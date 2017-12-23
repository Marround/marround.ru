import { Component, OnInit, HostListener } from '@angular/core';
declare let $: any;
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }
  goToNext(nextElem) {
    const nextElementY = document.getElementById(nextElem).offsetTop;
    $('body,html').animate({
      scrollTop: nextElementY
    }, 500);
  }
}
