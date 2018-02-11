import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Услуги - Marround');
    this.meta.updateTag({
      name: 'keywords',
      content: 'создать сайт, разработка сайтов, разработка мобильныйх сайтов, разработка сайтов под ключ, ' +
      'разработка официалоьношго сайта, СЕО оптимизация, продвижение сайтов, поддержка сайтов, низкая цена'
    });
    this.meta.updateTag({
      name: 'description',
      content: 'Услуги на разработку, сопровождение и СЕО продвижение сайтов. ' +
      'Разработка создание сайтов, лэндинг, одностраничкик, сайт визитка, корпоративный сайт, сайт каталог. ' +
      'Низкая цена: от 3000 р. Индивидуальный подход к каждому клиету. Сопровождение сайта.'});
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
