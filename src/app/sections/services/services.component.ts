import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  moduleId: module.id,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
  }
}
