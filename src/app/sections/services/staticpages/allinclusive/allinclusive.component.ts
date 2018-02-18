import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';


declare let $: any;

@Component({
  selector: 'app-allinclusive',
  templateUrl: './allinclusive.component.html',
  styleUrls: ['./allinclusive.component.css']
})
export class AllinclusiveComponent implements OnInit, OnDestroy {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Сопровождение "All inclusive" - Услуги - Marround');
    this.meta.updateTag({name: 'description', content: '☑ Тариф на обслуживание сата "All inclusive", информация об услуге, список видов работ'});

    this.meta.updateTag({property: 'og:locale', content: 'ru_RU'});
    this.meta.updateTag({property: 'og:title', content: 'Сопровождение "All inclusive" - Услуги - Marround'});
    this.meta.updateTag({property: 'og:description', content: '☑ Тариф на обслуживание сата "All inclusive", информация об услуге, список видов работ.'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'http://marround.ru/services/allinclusive'});
    this.meta.updateTag({property: 'og:image', content: 'http://marround.ru/assets/img/all-inclusive.png'});
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
