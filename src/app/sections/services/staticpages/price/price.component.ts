import { Component, OnInit } from '@angular/core';
import {IPricelist} from '../../../../srvice/pricelist';
import {LoadJsonService} from '../../../../srvice/loadjson.service';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

declare let $: any;

const PRICE_KEY = makeStateKey('price');

@Component({
  moduleId: module.id,
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
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
    this.meta.updateTag({name: 'keywords', content: 'Прайслист, прайс, цены, тарифы, разработка сайтов, создание сайта, сопровождение сайта, Marround'});
    this.meta.updateTag({name: 'description', content: 'Прайслист, полный перечень оказываемых услуг. Создание разработка сайтов, сопровождение сайтов, SEO продвижение, контекстная реклама.'});
  }

  ngOnInit() {
    this.toTop();

    this.pricelist = this.state.get(PRICE_KEY, null as any);
    if (!this.pricelist) {
      this.priceUrl = 'http://marround.ru/assets/json/price.json';
      this.jsonService.getJSON(this.priceUrl).subscribe(data => {
        this.pricelist = data.pricelist;
        this.state.set(PRICE_KEY, data.pricelist as any);
      }, error => this.errorMessage = < any > error);
    }
  }
  toTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  }
}
