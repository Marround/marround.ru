import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit, OnDestroy {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Single page application Сингл-пэйдж SPA - Услуги - Marround');
    this.meta.updateTag({name: 'description', content: '☑ Single page application - сокращенно SPA, в переводе на русский язык означает “Приложение одной страницы”. Другими словами SPA – это web-приложение, размещенное на одной web-странице, которая для обеспечения работы загружает весь необходимый код вместе с загрузкой самой страницы. Приложение такого типа появились сравнительно недавно, с началом эры HTML5 и SPA является типичным представителем приложений на HTML5.'});

    this.meta.updateTag({property: 'og:locale', content: 'ru_RU'});
    this.meta.updateTag({property: 'og:title', content: 'Single page application Сингл-пэйдж SPA - Услуги - Marround'});
    this.meta.updateTag({property: 'og:description', content: '☑ Single page application - сокращенно SPA, в переводе на русский язык означает “Приложение одной страницы”. Другими словами SPA – это web-приложение, размещенное на одной web-странице, которая для обеспечения работы загружает весь необходимый код вместе с загрузкой самой страницы. Приложение такого типа появились сравнительно недавно, с началом эры HTML5 и SPA является типичным представителем приложений на HTML5.'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'http://marround.ru/services/spa'});
    this.meta.updateTag({property: 'og:image', content: 'http://marround.ru/assets/img/spa.png'});
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
    this.toTop();
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
  toTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  }
}
