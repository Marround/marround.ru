import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-domainname',
  templateUrl: './domainname.component.html',
  styleUrls: ['./domainname.component.css']
})
export class DomainnameComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Домен - услуги - Marround');
    this.meta.updateTag({name: 'description', content: '☑ '});
  }

  ngOnInit() {
  }
}
