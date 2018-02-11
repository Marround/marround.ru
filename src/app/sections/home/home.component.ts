import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
declare let $: any;
export class Message {
  constructor(public neme: string,
              public email: string,
              public phone: string,
              public text: string) { }
}
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: Message;

  uName: string;
  email: string;
  phone: string;
  textMessage: string;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Разработка создание сайтов - Marround');
    this.meta.updateTag({
      name: 'keywords',
      content: 'создать сайт, разработка сайтов, разработка мобильныйх сайтов, разработка сайтов под ключ, ' +
      'разработка официалоьношго сайта, СЕО оптимизация, продвижение сайтов, поддержка сайтов, низкая цена'
    });
    this.meta.updateTag({
      name: 'description',
      content: 'Разработка создание сайтов, лэндинг, одностраничкик, сайт визитка, корпоративный сайт, сайт каталог. ' +
      'Низкая цена: от 3000 р. Индивидуальный подход к каждому клиету. Сопровождение сайта.'});
  }

  ngOnInit() {
    this.toTop();
  }

  goToNext(nextElem) {
    const nextElementY = document.getElementById(nextElem).offsetTop;
    $('body,html').animate({
      scrollTop: nextElementY
    }, 500);
  }

  toTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  }
  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
