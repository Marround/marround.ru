import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {

  message: Message;

  uName: string;
  email: string;
  phone: string;
  textMessage: string;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Разработка создание сайтов - Marround');
    this.meta.updateTag({
      name: 'description',
      content: '☑ Разработка создание сайтов, лэндинг, одностраничкик, сайт визитка, корпоративный сайт, сайт каталог. ' +
      'Низкая цена: от 3000 р. Индивидуальный подход к каждому клиету. Сопровождение сайта.'});

    this.meta.updateTag({property: 'og:locale', content: 'ru_RU'});
    this.meta.updateTag({property: 'og:title', content: 'Разработка создание сайтов - Marround'});
    this.meta.updateTag({
      property: 'og:description',
      content: '☑ Разработка создание сайтов, лэндинг, одностраничкик, сайт визитка, корпоративный сайт, сайт каталог. ' +
      'Низкая цена: от 3000 р. Индивидуальный подход к каждому клиету. Сопровождение сайта.'
    });
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'http://marround.ru/'});
    this.meta.updateTag({property: 'og:image', content: 'http://marround.ru/assets/img/beard.png'});
    this.meta.updateTag({property: 'og:site_name', content: 'Marround'});

    this.meta.updateTag({name: 'mobile-web-app-capable', content: 'yes'});
    this.meta.updateTag({name: 'apple-mobile-web-app-capable', content: 'yes'});
    this.meta.updateTag({name: 'application-name', content: 'Marround'});
    this.meta.updateTag({name: 'apple-mobile-web-app-title', content: 'Marround'});
    this.meta.updateTag({name: 'theme-color', content: '#A4C04E'});
    this.meta.updateTag({name: 'msapplication-navbutton-colo', content: '#A4C04E'});
    this.meta.updateTag({name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'});
    this.meta.updateTag({name: 'msapplication-starturl', content: 'http://marround.ru/'});
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.meta.removeTag('property="og:locale"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:site_name"');

    this.meta.removeTag('name="mobile-web-app-capable"');
    this.meta.removeTag('name="apple-mobile-web-app-capable"');
    this.meta.removeTag('name="application-name"');
    this.meta.removeTag('name="apple-mobile-web-app-title"');
    this.meta.removeTag('name="theme-color"');
    this.meta.removeTag('name="msapplication-navbutton-colo"');
    this.meta.removeTag('name="apple-mobile-web-app-status-bar-style"');
    this.meta.removeTag('name="msapplication-starturl"');
  }
  goToNext(nextElem) {
    const nextElementY = document.getElementById(nextElem).offsetTop;
    $('body,html').animate({
      scrollTop: nextElementY
    }, 500);
  }
  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
