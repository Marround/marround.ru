import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-domainname',
  templateUrl: './domainname.component.html',
  styleUrls: ['./domainname.component.css']
})
export class DomainnameComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Домен - услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: ''});
  }

  ngOnInit() {
    this.toTop();
  }
  toTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  }
}
