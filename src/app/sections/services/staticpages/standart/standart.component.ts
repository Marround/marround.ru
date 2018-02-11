import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Сопровождение "Standard" - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'All inclusive, Сопровождение сайтов, техническое обслуживание сайтов, наполнение сайтов, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Тариф на обслуживание сата "Standard", информация о тарифе, список видов работ'});
  }

  ngOnInit() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
  }

}
