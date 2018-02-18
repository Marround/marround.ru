import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPricelist} from '../../../../srvice/pricelist';
import {LoadJsonService} from '../../../../srvice/loadjson.service';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

const PRICE_KEY = makeStateKey('price');

@Component({
  moduleId: module.id,
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnDestroy {
  pricelist: IPricelist;
  priceUrl: string;
  errorMessage: string;

  constructor(
    private jsonService: LoadJsonService,
    private title: Title,
    private meta: Meta,
    private http: HttpClient,
    private state: TransferState
  ) {
    this.title.setTitle('Прайс - Услуги - Marround');
    this.meta.updateTag({name: 'description', content: '☑ Прайслист, полный перечень оказываемых услуг. Создание разработка сайтов, сопровождение сайтов, SEO продвижение, контекстная реклама.'});

    this.meta.updateTag({property: 'og:locale', content: 'ru_RU'});
    this.meta.updateTag({property: 'og:title', content: 'Прайс - Услуги - Marround'});
    this.meta.updateTag({property: 'og:description', content: '☑ Прайслист, полный перечень оказываемых услуг. Создание разработка сайтов, сопровождение сайтов, SEO продвижение, контекстная реклама.'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'http://marround.ru/services/price'});
    this.meta.updateTag({property: 'og:image', content: 'http://marround.ru/assets/img/labels/best-price.png'});
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
    this.pricelist = this.state.get(PRICE_KEY, null as any);
    if (!this.pricelist) {
      this.priceUrl = 'http://marround.ru/assets/json/price.json';
      this.jsonService.getJSON(this.priceUrl).subscribe(data => {
        this.pricelist = data.pricelist;
        this.state.set(PRICE_KEY, data.pricelist as any);
      }, error => this.errorMessage = < any > error);
    }
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
}
