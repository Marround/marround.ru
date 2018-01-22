import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sitecutaway',
  templateUrl: './sitecutaway.component.html',
  styleUrls: ['./sitecutaway.component.css']
})
export class SitecutawayComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Сайт визитка - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Сайт визитка, создание сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Информация по услуге: "Создание сайтов - сайт визитка"'});
  }

  ngOnInit() {
  }

}
