import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-sitecatalog',
  templateUrl: './sitecatalog.component.html',
  styleUrls: ['./sitecatalog.component.css']
})
export class SitecatalogComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Сайт каталог - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Сайт каталог, создание сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Информация по услуге: "Создание сайтов - сайт каталог"'});
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
