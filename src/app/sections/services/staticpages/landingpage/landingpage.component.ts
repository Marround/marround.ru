import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Посадочная страница (Landing page) - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Посадочная страница, landing page, лэндинг-пэйдж, создание сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Информация по услуге: "Создание сайтов - landing page"'});
  }

  ngOnInit() {
  }

}
