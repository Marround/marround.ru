import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Single page application (Сингл-пэйдж, SPA) - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Single page application, Сингл-пэйдж, SPA, создание сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Информация по услуге: "Создание сайтов - Single page application"'});
  }

  ngOnInit() {
  }

}
